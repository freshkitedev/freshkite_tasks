variable "ingress_namespace" {
  type        = string
  description = "Namespace where the ingress controller will be deployed"
}

variable "cluster_name" {
  type        = string
  description = "EKS cluster name"
}

variable "cluster_endpoint" {
  type        = string
  description = "EKS cluster API endpoint"
}

variable "cluster_certificate_authority_data" {
  type        = string
  description = "Base64 encoded EKS cluster CA certificate"
}