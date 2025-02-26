provider "helm" {
  kubernetes {
    host                   = var.cluster_endpoint
    token                  = data.aws_eks_cluster_auth.eks.token
    cluster_ca_certificate = base64decode(var.cluster_certificate_authority_data)
  }
}

data "aws_eks_cluster_auth" "eks" {
  name = var.cluster_name
}

resource "helm_release" "nginx_ingress" {
  name       = "nginx-ingress"
  repository = "https://kubernetes.github.io/ingress-nginx"
  chart      = "ingress-nginx"
  namespace  = var.ingress_namespace
  create_namespace = true

  values = [<<EOF
controller:
  service:
    type: LoadBalancer
EOF
  ]
}