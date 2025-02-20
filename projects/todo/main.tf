provider "aws" {
  region = "us-east-1"  # Change to your preferred AWS region
}

resource "aws_vpc" "my_vpc" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "my_subnet" {
  vpc_id                  = aws_vpc.my_vpc.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
}

resource "aws_security_group" "my_sg" {
  vpc_id = aws_vpc.my_vpc.id

  # Allow SSH access
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Change for security
  }

  # Allow HTTP access
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow all outbound traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_key_pair" "my_key" {
  key_name   = "my_key"
  public_key = file("~/.ssh/id_rsa.pub")  # Ensure you have an SSH key
}

resource "aws_instance" "my_ec2" {
  ami                    = "ami-0c104f6f4a5d9d1d5" # Amazon Linux 2 AMI (Change based on region)
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.my_subnet.id
  vpc_security_group_ids = [aws_security_group.my_sg.id]
  key_name               = aws_key_pair.my_key.key_name

  tags = {
    Name = "MyEC2Instance"
  }
}

output "instance_public_ip" {
  value = aws_instance.my_ec2.public_ip
}