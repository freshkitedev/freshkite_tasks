terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

module "vpc" {
  source          = "./vpc"
  vpc_cidr        = var.vpc_cidr
  azs             = var.azs
  private_subnets = var.private_subnets
  public_subnets  = var.public_subnets
}

module "eks" {
  source          = "./eks"
  cluster_name    = var.cluster_name
  cluster_version = var.cluster_version
  vpc_id          = module.vpc.vpc_id
  subnet_ids      = module.vpc.private_subnets

  node_desired_capacity = var.node_desired_capacity
  node_max_capacity     = var.node_max_capacity
  node_min_capacity     = var.node_min_capacity
  node_instance_types   = var.node_instance_types
}

module "ingress" {
  source                           = "./ingress"
  ingress_namespace                = var.ingress_namespace
  cluster_endpoint                 = module.eks.eks_cluster_endpoint
  cluster_name                     = module.eks.eks_cluster_name
  cluster_certificate_authority_data = module.eks.eks_cluster_certificate_authority_data
}
