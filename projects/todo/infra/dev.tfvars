region = "us-east-1"

# VPC Values
vpc_cidr = "10.0.0.0/16"
azs = ["us-east-1a", "us-east-1b"]
private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
public_subnets = ["10.0.101.0/24", "10.0.102.0/24"]

# EKS Values
cluster_name = "mern-eks-cluster"
cluster_version = "1.27"
node_desired_capacity = 2
node_max_capacity = 3
node_min_capacity = 1
node_instance_types = ["t3.medium"]

# Ingress Values
ingress_namespace = "kube-system"
