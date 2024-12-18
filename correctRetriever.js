let z = [
	{
		"question": "A company has three VPCs named Development, Testing, and Production in the us-east-1 Region. The three VPCs need to be connected to an on-premises data center and are designed to be separate to maintain security and prevent any resource sharing. A solutions architect needs to find a scalable and secure solution. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Create an AWS Direct Connect connection and a VPN connection for each VPC to connect back to the data center."
		],
		"wrongAnswersArray": [
			"Create VPC peers from all the VPCs to the Production VPC. Use an AWS Direct Connect connection from the Production VPC back to the data center.",
			"Create a new VPC called Network. Within the Network VPC, create an AWS Transit Gateway with an AWS Direct Connect connection back to the data center. Attach all the other VPCs to the Network VPC.",
			"Connect VPN connections from all the VPCs to a VPN in the Production VPC. Use a VPN connection from the Production VPC back to the data center."
		]
	},
	{
		"question": "A company's packaged application dynamically creates and returns single-use text files in response to user requests. The company is using Amazon CloudFront for distribution, but wants to further reduce data transfer costs. The company cannot modify the application's source code. What should a solutions architect do to reduce costs?",
		"correctAnswersArray": [
			"Use Lambda@Edge to compress the files as they are sent to users."
		],
		"wrongAnswersArray": [
			"Enable Amazon S3 Transfer Acceleration to reduce the response times.",
			"Enable caching on the CloudFront distribution to store generated files at the edge",
			"Use Amazon S3 multipart uploads to move the files to Amazon S3 before returning them to users."
		]
	},
	{
		"question": "An online photo application lets users upload photos and perform image editing operations. The application offers two classes of service free and paid. Photos submitted by paid users are processed before those submitted by free users. Photos are uploaded to Amazon S3 and the job information is sent to Amazon SQS. Which configuration should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use two SQS standard queues one for paid and one for free. Configure Amazon EC2 instances to prioritize polling for the paid queue over the free queue."
		],
		"wrongAnswersArray": [
			"Use two SQS FIFO queues one for paid and one for free. Set the free queue to use short polling and the paid queue to use long polling.",
			"Use one SQS FIFO queue. Assign a higher priority to the paid photos so they are processed first.",
			"Use one SQS standard queue. Set the visibility timeout of the paid photos to zero. Configure Amazon EC2 instances to prioritize visibility settings so paid photos are processed first."
		]
	},
	{
		"question": "A solutions architect is designing a solution that involves orchestrating a series of Amazon Elastic Container Service (Amazon ECS) task types running on Amazon EC2 instances that are part of an ECS cluster. The output and state data for all tasks needs to be stored. The amount of data output by each task is approximately 10 MB, and there could be hundreds of tasks running at a time. The system should be optimized for high-frequency reading and writing. As old outputs are archived and deleted, the storage size is not expected to exceed 1 TB. Which storage solution should the solutions architect recommend?",
		"correctAnswersArray": [
			"An Amazon Elastic File System (Amazon EFS) with Provisioned Throughput mode."
		],
		"wrongAnswersArray": [
			"An Amazon DynamoDB table accessible by all ECS cluster instances.",
			"An Amazon Elastic Block Store (Amazon EBS) volume mounted to the ECS cluster instances.",
			"An Amazon Elastic File System (Amazon EFS) file system with Bursting Throughput mode."
		]
	},
	{
		"question": "As part of budget planning, management wants a report of AWS billed items listed by user. The data will be used to create department budgets. A solutions architect needs to determine the most efficient way to obtain this report information. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Create a report in Cost Explorer and download the report."
		],
		"wrongAnswersArray": [
			"Access the bill details from the billing dashboard and download the bill.",
			"Run a query with Amazon Athena to generate the report.",
			"Modify a cost budget in AWS Budgets to alert with Amazon Simple Email Service (Amazon SES)."
		]
	},
	{
		"question": "A solutions architect is designing a VPC with public and private subnets. The VPC and subnets use IPv4 CIDR blocks. There is one public subnet and one private subnet in each of three Availability Zones (AZs) for high availability. An internet gateway is used to provide internet access for the public subnets. The private subnets require access to the internet to allow Amazon EC2 instances to download software updates. What should the solutions architect do to enable internet access for the private subnets?",
		"correctAnswersArray": [
			"Create three NAT gateways, one for each public subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ."
		],
		"wrongAnswersArray": [
			"Create three NAT instances, one for each private subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT instance in its AZ.",
			"Create a second internet gateway on one of the private subnets. Update the route table for the private subnets that forward non-VPC traffic to the private internet gateway.",
			"Create an egress-only internet gateway on one of the public subnets. Update the route table for the private subnets that forward non-VPC traffic to the egress- only internet gateway."
		]
	},
	{
		"question": "A company has a 10 Gbps AWS Direct Connect connection from its on-premises servers to AWS. The workloads using the connection are critical. The company requires a disaster recovery strategy with maximum resiliency that maintains the current connection bandwidth at a minimum. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Set up two new Direct Connect connections one in the current AWS Region and one in another Region."
		],
		"wrongAnswersArray": [
			"Set up a new AWS managed VPN connection in another AWS Region.",
			"Set up two new AWS managed VPN connections one in the current AWS Region and one in another Region.",
			"Set up a new Direct Connect connection in another AWS Region."
		]
	},
	{
		"question": "A company hosts an online shopping application that stores all orders in an Amazon RDS for PostgreSQL Single-AZ DB instance. Management wants to eliminate single points of failure and has asked a solutions architect to recommend an approach to minimize database downtime without requiring any changes to the application code. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Convert the existing database instance to a Multi-AZ deployment by modifying the database instance and specifying the Multi-AZ option."
		],
		"wrongAnswersArray": [
			"Create a read-only replica of the PostgreSQL database in another Availability Zone. Use Amazon Route 53 weighted record sets to distribute requests across the databases.",
			"Place the RDS for PostgreSQL database in an Amazon EC2 Auto Scaling group with a minimum group size of two. Use Amazon Route 53 weighted record sets to distribute requests across instances.",
			"Create a new RDS Multi-AZ deployment. Take a snapshot of the current RDS instance and restore the new Multi-AZ deployment with the snapshot."
		]
	},
	{
		"question": "A company wants to host a web application on AWS that will communicate to a database within a VPC. The application should be highly available. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Deploy a load balancer in multiple Availability Zones with an Auto Scaling group for the web servers, and then deploy Amazon RDS in multiple Availability Zones."
		],
		"wrongAnswersArray": [
			"Create two Amazon EC2 instances to host the web servers behind a load balancer, and then deploy the database on a large instance.",
			"Deploy two web servers with an Auto Scaling group, configure a domain that points to the two web servers, and then deploy a database architecture in multiple Availability Zones.",
			"Deploy a load balancer in the public subnet with an Auto Scaling group for the web servers, and then deploy the database on an Amazon EC2 instance in the private subnet."
		]
	},
	{
		"question": "A solutions architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a static website. The company security policy requires that all website traffic be inspected by AWS WAF. How should the solutions architect comply with these requirements?",
		"correctAnswersArray": [
			"Configure Amazon CloudFront and Amazon S3 to use an origin access identity (OAI) to restrict access to the S3 bucket. Enable AWS WAF on the distribution."
		],
		"wrongAnswersArray": [
			"Configure an S3 bucket policy to accept requests coming from the AWS WAF Amazon Resource Name (ARN) only.",
			"Configure Amazon CloudFront to forward all incoming requests to AWS WAF before requesting content from the S3 origin",
			"Configure a security group that allows Amazon CloudFront IP addresses to access Amazon S3 only. Associate AWS WAF to CloudFront."
		]
	},
	{
		"question": "A company has data stored in an on-premises data center that is used by several on-premises applications. The company wants to maintain its existing application environment and be able to use AWS services for data analytics and future visualizations. Which storage service should a solutions architect recommend?",
		"correctAnswersArray": [
			"AWS Storage Gateway for files"
		],
		"wrongAnswersArray": [
			"Amazon Redshift",
			"Amazon Elastic File System (Amazon EFS)",
			"Amazon Elastic Block Store (Amazon EBS)"
		]
	},
	{
		"question": "A company uses Amazon Redshift for its data warehouse. The company wants to ensure high durability for its data in case of any component failure. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Enable cross-Region snapshots."
		],
		"wrongAnswersArray": [
			"Increase the data retention period.",
			"Deploy Amazon Redshift in Multi-AZ.",
			"Enable concurrency scaling."
		]
	},
	{
		"question": "A company is building a website that relies on reading and writing to an Amazon DynamoDB database. The traffic associated with the website predictably peaks during business hours on weekdays and declines overnight and during weekends. A solutions architect needs to design a cost-effective solution that can handle the load. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Enable DynamoDB auto scaling when creating the tables."
		],
		"wrongAnswersArray": [
			"Enable Multi-AZ replication for the DynamoDB database.",
			"Enable DynamoDB Accelerator (DAX) to cache the data.",
			"Enable DynamoDB On-Demand capacity allocation when creating the tables."
		]
	},
	{
		"question": "A company is hosting an election reporting website on AWS for users around the world. The website uses Amazon EC2 instances for the web and application tiers in an Auto Scaling group with Application Load Balancers. The database tier uses an Amazon RDS for MySQL database. The website is updated with election results once an hour and has historically observed hundreds of users accessing the reports. The company is expecting a significant increase in demand because of upcoming elections in different countries. A solutions architect must improve the website's ability to handle additional demand while minimizing the need for additional EC2 instances. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Launch an Amazon CloudFront web distribution to cache commonly requested website content."
		],
		"wrongAnswersArray": [
			"Launch an Amazon ElastiCache cluster to cache common database queries.",
			"Enable disk-based caching on the EC2 instances to cache commonly requested website content.",
			"Deploy a reverse proxy into the design using an EC2 instance with caching enabled for commonly requested website content."
		]
	},
	{
		"question": "A company receives structured and semi-structured data from various sources once every day. A solutions architect needs to design a solution that leverages big data processing frameworks. The data should be accessible using SQL queries and business intelligence tools. What should the solutions architect recommend to build the MOST high-performing solution?",
		"correctAnswersArray": [
			"Use Amazon EMR to process data and Amazon Redshift to store data."
		],
		"wrongAnswersArray": [
			"Use AWS Glue to process data and Amazon S3 to store data.",
			"Use Amazon EC2 to process data and Amazon Elastic Block Store (Amazon EBS) to store data.",
			"Use Amazon Kinesis Data Analytics to process data and Amazon Elastic File System (Amazon EFS) to store data."
		]
	},
	{
		"question": "A company operates an ecommerce website on Amazon EC2 instances behind an Application Load Balancer (ALB) in an Auto Scaling group. The site is experiencing performance issues related to a high request rate from illegitimate external systems with changing IP addresses. The security team is worried about potential DDoS attacks against the website. The company must block the illegitimate incoming requests in a way that has a minimal impact on legitimate users. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Deploy AWS WAF, associate it with the ALB, and configure a rate-limiting rule."
		],
		"wrongAnswersArray": [
			"Deploy Amazon Inspector and associate it with the ALB.",
			"Deploy rules to the network ACLs associated with the ALB to block the incoming traffic.",
			"Deploy Amazon GuardDuty and enable rate-limiting protection when configuring GuardDuty."
		]
	},
	{
		"question": "A company hosts its core network services, including directory services and DNS, in its on-premises data center. The data center is connected to the AWS Cloud using AWS Direct Connect (DX). Additional AWS accounts are planned that will require quick, cost-effective, and consistent access to these network services. What should a solutions architect implement to meet these requirements with the LEAST amount of operational overhead?",
		"correctAnswersArray": [
			"Configure AWS Transit Gateway between the accounts. Assign DX to the transit gateway and route network traffic to the on-premises servers."
		],
		"wrongAnswersArray": [
			"Create a DX connection in each new account. Route the network traffic to the on-premises servers.",
			"Configure VPC endpoints in the DX VPC for all required services. Route the network traffic to the on-premises servers.",
			"Create a VPN connection between each new account and the DX VPC. Route the network traffic to the on-premises servers."
		]
	},
	{
		"question": "A solutions architect is creating an application that will handle batch processing of large amounts of data. The input data will be held in Amazon S3 and the output data will be stored in a different S3 bucket. For processing, the application will transfer the data over the network between multiple Amazon EC2 instances. What should the solutions architect do to reduce the overall data transfer costs?",
		"correctAnswersArray": [
			"Place all the EC2 instances in the same Availability Zone."
		],
		"wrongAnswersArray": [
			"Place all the EC2 instances in the same AWS Region.",
			"Place all the EC2 instances in an Auto Scaling group.",
			"Place all the EC2 instances in private subnets in multiple Availability Zones."
		]
	},
	{
		"question": "A solutions architect is designing the storage architecture for a new web application used for storing and viewing engineering drawings. All application components will be deployed on the AWS infrastructure. The application design must support caching to minimize the amount of time that users wait for the engineering drawings to load. The application must be able to store petabytes of data. Which combination of storage and caching should the solutions architect use?",
		"correctAnswersArray": [
			"Amazon S3 with Amazon CloudFront"
		],
		"wrongAnswersArray": [
			"AWS Storage Gateway with Amazon ElastiCache",
			"Amazon S3 Glacier with Amazon ElastiCache",
			"Amazon Elastic Block Store (Amazon EBS) volumes with Amazon CloudFront"
		]
	},
	{
		"question": "A company is designing a new web service that will run on Amazon EC2 instances behind an Elastic Load Balancer. However, many of the web service clients can only reach IP addresses whitelisted on their firewalls. What should a solutions architect recommend to meet the clients needs?",
		"correctAnswersArray": [
			"A Network Load Balancer with an associated Elastic IP address."
		],
		"wrongAnswersArray": [
			"An A record in an Amazon Route 53 hosted zone pointing to an Elastic IP address",
			"An Application Load Balancer with an associated Elastic IP address",
			"An EC2 instance with a public IP address running as a proxy in front of the load balancer"
		]
	},
	{
		"question": "A company has a web application with sporadic usage patterns. There is heavy usage at the beginning of each month, moderate usage at the start of each week, and unpredictable usage during the week. The application consists of a web server and a MySQL database server running inside the data center. The company would like to move the application to the AWS Cloud, and needs to select a cost-effective database platform that will not require database modifications. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"MySQL-compatible Amazon Aurora Serverless"
		],
		"wrongAnswersArray": [
			"Amazon RDS for MySQL",
			"MySQL deployed on Amazon EC2 in an Auto Scaling group",
			"Amazon DynamoDB"
		]
	},
	{
		"question": "A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various storage options. The storage solution must be highly available and integrated with Active Directory for access control. Which solution will satisfy these requirements?",
		"correctAnswersArray": [
			"Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for authentication."
		],
		"wrongAnswersArray": [
			"Configure Amazon EFS storage and set the Active Directory domain for authentication.",
			"Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones.",
			"Create an Amazon S3 bucket and configure Microsoft Windows Server to mount it as a volume."
		]
	},
	{
		"question": "A company is migrating a NoSQL database cluster to Amazon EC2. The database automatically replicates data to maintain at least three copies of the data. I/O throughput of the servers is the highest priority. Which instance type should a solutions architect recommend for the migration?",
		"correctAnswersArray": [
			"Storage optimized instances with instance store"
		],
		"wrongAnswersArray": [
			"Compute optimized instances with Amazon Elastic Block Store (Amazon EBS) optimization enabled",
			"Burstable general purpose instances with an Amazon Elastic Block Store (Amazon EBS) volume",
			"Memory optimized instances with Amazon Elastic Block Store (Amazon EBS) optimization enabled"
		]
	},
	{
		"question": "A company currently has 250 TB of backup files stored in Amazon S3 in a vendor's proprietary format. Using a Linux-based software application provided by the vendor, the company wants to retrieve files from Amazon S3, transform the files to an industry-standard format, and re-upload them to Amazon S3. The company wants to minimize the data transfer charges associated with this conversation. What should a solutions architect do to accomplish this?",
		"correctAnswersArray": [
			"Launch an Amazon EC2 instance in the same Region as Amazon S3 and install the conversion software onto the instance. Perform the transformation and re- upload the files to Amazon S3 from the EC2 instance."
		],
		"wrongAnswersArray": [
			"Use AWS Snowball Edge devices to export the data and install the conversion software onto the devices. Perform the data transformation and re-upload the files to Amazon S3 from the Snowball Edge devices.",
			"Install the conversion software as an Amazon S3 batch operation so the data is transformed without leaving Amazon S3",
			"Install the conversion software onto an on-premises virtual machine. Perform the transformation and re-upload the files to Amazon S3 from the virtual machine."
		]
	},
	{
		"question": "A company wants to share forensic accounting data that is stored in an Amazon RDS DB instance with an external auditor. The auditor has its own AWS account and requires its own copy of the database. How should the company securely share the database with the auditor?",
		"correctAnswersArray": [
			"Make an encrypted snapshot of the database, share the snapshot, and allow access to the AWS Key Management Service (AWS KMS) encryption key."
		],
		"wrongAnswersArray": [
			"Export the database contents to text files, store the files in Amazon S3, and create a new IAM user for the auditor with access to that bucket.",
			"Copy a snapshot of the database to Amazon S3 and assign an IAM role to the auditor to grant access to the object in that bucket.",
			"Create a read replica of the database and configure IAM standard database authentication to grant the auditor access."
		]
	},
	{
		"question": "A company is planning to deploy an Amazon RDS DB instance running Amazon Aurora. The company has a backup retention policy requirement of 90 days. Which solution should a solutions architect recommend?",
		"correctAnswersArray": [
			"Create an AWS Backup plan to perform a daily snapshot of the RDS database with the retention set to 90 days. Create an AWS Backup job to schedule the execution of the backup plan daily."
		],
		"wrongAnswersArray": [
			"Set the backup retention period to 90 days when creating the RDS DB instance.",
			"Configure RDS to copy automated snapshots to a user-managed Amazon S3 bucket with a lifecycle policy set to delete after 90 days.",
			"Use a daily scheduled event with Amazon CloudWatch Events to execute a custom AWS Lambda function that makes a copy of the RDS automated snapshot. Purge snapshots older than 90 days."
		]
	},
	{
		"question": "A solutions architect is designing a security solution for a company that wants to provide developers with individual AWS accounts through AWS Organizations, while also maintaining standard security controls. Because the individual developers will have AWS account root user-level access to their own accounts, the solutions architect wants to ensure that the mandatory AWS CloudTrail configuration that is applied to new developer accounts is not modified. Which action meets these requirements?",
		"correctAnswersArray": [
			"Create a service control policy (SCP) the prohibits changes to CloudTrail, and attach it the developer accounts"
		],
		"wrongAnswersArray": [
			"Create an IAM policy that prohibits changes to CloudTrail, and attach it to the root user.",
			"Create a new trail in CloudTrail from within the developer accounts with the organization trails option enabled.",
			"Create a service-linked role for CloudTrail with a policy condition that allows changes only from an Amazon Resource Name (ARN) in the master account."
		]
	},
	{
		"question": "A company is building a document storage application on AWS. The application runs on Amazon EC2 instances in multiple Availability Zones. The company requires the document store to be highly available. The documents need to be returned immediately when requested. The lead engineer has configured the application to use Amazon Elastic Block Store (Amazon EBS) to store the documents, but is willing to consider other options to meet the availability requirement. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use Amazon EBS for the EC2 instance root volumes. Configure the application to build the document store on Amazon S3."
		],
		"wrongAnswersArray": [
			"Use Amazon EBS for the EC2 instance root volumes. Configure the application to build the document store on Amazon S3 Glacier.",
			"Snapshot the EBS volumes regularly and build new volumes using those snapshots in additional Availability Zones.",
			"Use at least three Provisioned IOPS EBS volumes for EC2 instances. Mount the volumes to the EC2 instances in a RAID 5 configuration."
		]
	},
	{
		"question": "A company is deploying a multi-instance application within AWS that requires minimal latency between the instances. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use an Auto Scaling group with a cluster placement group."
		],
		"wrongAnswersArray": [
			"Use a Network Load Balancer with multiple Amazon EC2 Dedicated Hosts as the targets.",
			"Use an Auto Scaling group with single Availability Zone in the same AWS Region.",
			"Use an Auto Scaling group with multiple Availability Zones in the same AWS Region."
		]
	},
	{
		"question": "A company hosts an application used to upload files to an Amazon S3 bucket. Once uploaded, the files are processed to extract metadata, which takes less than 5 seconds. The volume and frequency of the uploads varies from a few files each hour to hundreds of concurrent uploads. The company has asked a solutions architect to design a cost-effective architecture that will meet these requirements. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Configure an object-created event notification within the S3 bucket to invoke an AWS Lambda function to process the files."
		],
		"wrongAnswersArray": [
			"Configure an Amazon Simple Notification Service (Amazon SNS) topic to process the files uploaded to Amazon S3. Invoke an AWS Lambda function to process the files.",
			"Configure AWS CloudTrail trails to log S3 API calls. Use AWS AppSync to process the files.",
			"Configure Amazon Kinesis Data Streams to process and send data to Amazon S3. Invoke an AWS Lambda function to process the files."
		]
	},
	{
		"question": "A company is experiencing growth as demand for its product has increased. The company's existing purchasing application is slow when traffic spikes. The application is a monolithic three-tier application that uses synchronous transactions and sometimes sees bottlenecks in the application tier. A solutions architect needs to design a solution that can meet required application response times while accounting for traffic volume spikes. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Scale the web and application tiers horizontally using Auto Scaling groups and an Application Load Balancer."
		],
		"wrongAnswersArray": [
			"vDecouple the application and data tiers using Amazon Simple Queue Service (Amazon SQS) with asynchronous AWS Lambda calls.",
			"Vertically scale the application instance using a larger Amazon EC2 instance size.",
			"Scale the applicationג€™s persistence layer horizontally by introducing Oracle RAC on AWS."
		]
	},
	{
		"question": "A company is deploying a web portal. The company wants to ensure that only the web portion of the application is publicly accessible. To accomplish this, the VPC was designed with two public subnets and two private subnets. The application will run on several Amazon EC2 instances in an Auto Scaling group. SSL termination must be offloaded from the EC2 instances. What should a solutions architect do to ensure these requirements are met?",
		"correctAnswersArray": [
			"Configure the Application Load Balancer in the public subnets. Configure the Auto Scaling group in the private subnets and associate it with the Application Load Balancer."
		],
		"wrongAnswersArray": [
			"Configure the Network Load Balancer in the public subnets. Configure the Auto Scaling group in the private subnets and associate it with the Application Load Balancer.",
			"Configure the Network Load Balancer in the public subnets. Configure the Auto Scaling group in the public subnets and associate it with the Application Load Balancer.",
			"Configure the Application Load Balancer in the private subnets. Configure the Auto Scaling group in the private subnets and associate it with the Application Load Balancer."
		]
	},
	{
		"question": "A database is on an Amazon RDS MySQL 5.6 Multi-AZ DB instance that experiences highly dynamic reads. Application developers notice a significant slowdown when testing read performance from a secondary AWS Region. The developers want a solution that provides less than 1 second of read replication latency. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Migrate the database to Amazon Aurora with cross-Region replicas."
		],
		"wrongAnswersArray": [
			"Install MySQL on Amazon EC2 in the secondary Region.",
			"Implement Amazon ElastiCache to improve database query performance.",
			"Create another RDS for MySQL read replica in the secondary Region."
		]
	},
	{
		"question": "A company has media and application files that need to be shared internally. Users currently are authenticated using Active Directory and access files from a Microsoft Windows platform. The chief executive officer wants to keep the same user permissions, but wants the company to improve the process as the company is reaching its storage capacity limit. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Configure Amazon FSx for Windows File Server and move all the media and application files."
		],
		"wrongAnswersArray": [
			"Set up Amazon EC2 on Windows, attach multiple Amazon Elastic Block Store (Amazon EBS) volumes, and move all media and application files.",
			"Set up Amazon EC2 on Windows, attach multiple Amazon Elastic Block Store (Amazon EBS) volumes, and move all media and application files.",
			"Set up a corporate Amazon S3 bucket and move all media and application files."
		]
	},
	{
		"question": "A company uses a legacy on-premises analytics application that operates on gigabytes of .csv files and represents months of data. The legacy application cannot handle the growing size of .csv files. New .csv files are added daily from various data sources to a central on-premises storage location. The company wants to continue to support the legacy application while users learn AWS analytics services. To achieve this, a solutions architect wants to maintain two synchronized copies of all the .csv files on-premises and in Amazon S3. Which solution should the solutions architect recommend?",
		"correctAnswersArray": [
			"Deploy AWS DataSync on-premises. Configure DataSync to continuously replicate the .csv files between the company's on-premises storage and the company's S3 bucket."
		],
		"wrongAnswersArray": [
			"Deploy an on-premises file gateway. Configure data sources to write the .csv files to the file gateway. Point the legacy analytics application to the file gateway. The file gateway should replicate the .csv files to Amazon S3.",
			"Deploy an on-premises volume gateway. Configure data sources to write the .csv files to the volume gateway. Point the legacy analytics application to the volume gateway. The volume gateway should replicate data to Amazon S3.",
			"Deploy AWS DataSync on-premises. Configure DataSync to continuously replicate the .csv files between on-premises and Amazon Elastic File System (Amazon EFS). Enable replication from Amazon EFS to the company's S3 bucket."
		]
	},
	{
		"question": "A company runs a high performance computing (HPC) workload on AWS. The workload required low-latency network performance and high network throughput with tightly coupled node-to-node communication. The Amazon EC2 instances are properly sized for compute and storage capacity, and are launched using default options. What should a solutions architect propose to improve the performance of the workload?",
		"correctAnswersArray": [
			"Choose a cluster placement group while launching Amazon EC2 instances."
		],
		"wrongAnswersArray": [
			"Choose an Elastic Inference accelerator while launching Amazon EC2 instances.",
			"Choose dedicated instance tenancy while launching Amazon EC2 instances.",
			"Choose the required capacity reservation while launching Amazon EC2 instances."
		]
	},
	{
		"question": "A company uses Application Load Balancers (ALBs) in different AWS Regions. The ALBs receive inconsistent traffic that can spike and drop throughout the year. The company's networking team needs to allow the IP addresses of the ALBs in the on-premises firewall to enable connectivity. Which solution is the MOST scalable with minimal configuration changes?",
		"correctAnswersArray": [
			"Launch AWS Global Accelerator. Register the ALBs in different Regions to the accelerator. Update the on-premises firewall's rule to allow static IP addresses associated with the accelerator."
		],
		"wrongAnswersArray": [
			"Write an AWS Lambda script to get the IP addresses of the ALBs in different Regions. Update the on-premises firewall's rule to allow the IP addresses of the ALBs.",
			"Migrate all ALBs in different Regions to the Network Load Balancer (NLBs). Update the on-premises firewall's rule to allow the Elastic IP addresses of all the NLBs.",
			"Launch a Network Load Balancer (NLB) in one Region. Register the private IP addresses of the ALBs in different Regions with the NLB. Update the on- premises firewall's rule to allow the Elastic IP address attached to the NLB."
		]
	},
	{
		"question": "A company needs a secure connection between its on-premises environment and AWS. This connection does not need high bandwidth and will handle a small amount of traffic. The connection should be set up quickly. What is the MOST cost-effective method to establish this type of connection?",
		"correctAnswersArray": [
			"Implement an AWS Site-to-Site VPN connection."
		],
		"wrongAnswersArray": [
			"Implement AWS Direct Connect.",
			"Implement a bastion host on Amazon EC2.",
			"Implement a client VPN."
		]
	},
	{
		"question": "What should a solutions architect do to ensure that all objects uploaded to an Amazon S3 bucket are encrypted?",
		"correctAnswersArray": [
			"Update the bucket policy to deny if the PutObject does not have an x-amz-server-side-encryption header set."
		],
		"wrongAnswersArray": [
			"Update the bucket policy to deny if the PutObject does not have an s3 x-amz-acl header set.",
			"Update the bucket policy to deny if the PutObject does not have an aws SecureTransport header set to true.",
			"Update the bucket policy to deny if the PutObject does not have an s3 x-amz-acl header set to private."
		]
	},
	{
		"question": "A company has a live chat application running on its on-premises servers that use WebSockets. The company wants to migrate the application to AWS. Application traffic is inconsistent, and the company expects there to be more traffic with sharp spikes in the future. The company wants a highly scalable solution with no server maintenance nor advanced capacity planning. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use Amazon API Gateway and AWS Lambda with an Amazon DynamoDB table as the data store. Configure the DynamoDB table for provisioned capacity."
		],
		"wrongAnswersArray": [
			"Run Amazon EC2 instances behind a Network Load Balancer in an Auto Scaling group with an Amazon DynamoDB table as the data store. Configure the DynamoDB table for provisioned capacity.",
			"Use Amazon API Gateway and AWS Lambda with an Amazon DynamoDB table as the data store. Configure the DynamoDB table for on-demand capacity.",
			"Run Amazon EC2 instances behind an Application Load Balancer in an Auto Scaling group with an Amazon DynamoDB table as the data store. Configure the DynamoDB table for on-demand capacity."
		]
	},
	{
		"question": "A software vendor is deploying a new software-as-a-service (SaaS) solution that will be utilized by many AWS users. The service is hosted in a VPC behind a Network Load Balancer. The software vendor wants to provide access to this service to users with the least amount of administrative overhead and without exposing the service to the public internet. What should a solutions architect do to accomplish this goal?",
		"correctAnswersArray": [
			"Connect the service in the VPC with an AWS Private Link endpoint. Have users subscribe to the endpoint."
		],
		"wrongAnswersArray": [
			"Deploy a transit VPC in the software vendorג€™s AWS account. Create an AWS Direct Connect connection with each user account.",
			"Deploy a transit VPC in the software vendorג€™s AWS account. Create a VPN connection with each user account.",
			"Create a peering VPC connection from each userג€™s VPC to the software vendorג€™s VPC."
		]
	},
	{
		"question": "An application running on an Amazon EC2 instance needs to access an Amazon DynamoDB table. Both the EC2 instance and the DynamoDB table are in the same AWS account. A solutions architect must configure the necessary permissions. Which solution will allow least privilege access to the DynamoDB table from the EC2 instance?",
		"correctAnswersArray": [
			"Create an IAM role with the appropriate policy to allow access to the DynamoDB table. Create an instance profile to assign this IAM role to the EC2 instance."
		],
		"wrongAnswersArray": [
			"Create an IAM role with the appropriate policy to allow access to the DynamoDB table. Add the EC2 instance to the trust relationship policy document to allow it to assume the role.",
			"Create an IAM user with the appropriate policy to allow access to the DynamoDB table. Ensure that the application stores the IAM credentials securely on local storage and uses them to make the DynamoDB calls.",
			"Create an IAM user with the appropriate policy to allow access to the DynamoDB table. Store the credentials in an Amazon S3 bucket and read them from within the application code directly."
		]
	},
	{
		"question": "A company hosts its static website content from an Amazon S3 bucket in the us-east-1 Region. Content is made available through an Amazon CloudFront origin pointing to that bucket. Cross-Region replication is set to create a second copy of the bucket in the ap-southeast-1 Region. Management wants a solution that provides greater availability for the website. Which combination of actions should a solutions architect take to increase availability? (Choose two.)",
		"correctAnswersArray": [
			"Create an additional CloudFront origin pointing to the ap-southeast-1 bucket."
		],
		"wrongAnswersArray": [
			"Add both buckets to the CloudFront origin.",
			"Set up a CloudFront origin group with the us-east-1 bucket as the primary and the ap-southeast-1 bucket as the secondary.",
			"Create a record in Amazon Route 53 pointing to the replica bucket.",
			"Configure failover routing in Amazon Route 53."
		]
	},
	{
		"question": "A company has an on-premises MySQL database used by the global sales team with infrequent access patterns. The sales team requires the database to have minimal downtime. A database administrator wants to migrate this database to AWS without selecting a particular instance type in anticipation of more users in the future. Which service should a solutions architect recommend?",
		"correctAnswersArray": [
			"Amazon Aurora Serverless for MySQL"
		],
		"wrongAnswersArray": [
			"Amazon Redshift Spectrum",
			"Amazon Aurora MySQL",
			"Amazon RDS for MySQL"
		]
	},
	{
		"question": "A company is moving its on-premises Oracle database to Amazon Aurora PostgreSQL. The database has several applications that write to the same tables. The applications need to be migrated one by one with a month in between each migration Management has expressed concerns that the database has a high number of reads and writes. The data must be kept in sync across both databases throughout tie migration. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use the AWS Schema Conversion Tool with AWS DataBase Migration Service (AWS DMS) using a memory optimized replication instance. Create a full load plus change data capture (CDC) replication task and a table mapping to select all tables."
		],
		"wrongAnswersArray": [
			"Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a full load plus change data capture (CDC) replication task and a table mapping to select all tables.",
			"Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a change data capture (CDC) replication task and a table mapping to select all cables.",
			"Use the AWS Schema Conversion Tool with AWS Database Migration Service (AWS DMS) using a compute optimized replication instance. Create a full load plus change data capture (CDC) replication task and a table mapping to select the largest tables."
		]
	},
	{
		"question": "A company has a 143 TB MySQL database that it wants to migrate to AWS. The plan is to use Amazon Aurora MySQL as the platform going forward. The company has a 100 Mbps AWS Direct Connect connection to Amazon VPC. Which solution meets the companyג€™s needs and takes the LEAST amount of time?",
		"correctAnswersArray": [
			"Order four 50-TB AWS Snowball devices and copy the database backup onto them. Have AWS import the data into Amazon S3. Import the data into Aurora."
		],
		"wrongAnswersArray": [
			"Upgrade the Direct Connect link to 500 Mbps. Copy the data to Amazon S3. Import the data into Aurora.",
			"Use a gateway endpoint for Amazon S3. Migrate the data to Amazon S3. Import the data into Aurora.",
			"Order an AWS Snowmobile and copy the database backup to it. Have AWS import the data into Amazon S3. Import the backup into Aurora."
		]
	},
	{
		"question": "A company has an ecommerce application that stores data in an on-premises SQL database. The company has decided to migrate this database to AWS. However, as part of the migration, the company wants to find a way to attain sub-millisecond responses to common read requests. A solutions architect knows that the increase in speed is paramount and that a small percentage of stale data returned in the database reads is acceptable. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Build a database cache using Amazon ElastiCache."
		],
		"wrongAnswersArray": [
			"Build a database cache using Amazon Elasticsearch Service (Amazon ES).",
			"Build Amazon RDS read replicas.",
			"Build the database as a larger instance type."
		]
	},
	{
		"question": "A company has an image processing workload running on Amazon Elastic Container Service (Amazon ECS) in two private subnets. Each private subnet uses a NAT instance for internet access. All images are stored in Amazon S3 buckets. The company is concerned about the data transfer costs between Amazon ECS and Amazon S3. What should a solutions architect do to reduce costs?",
		"correctAnswersArray": [
			"Configure a gateway endpoint for traffic destined to Amazon S3."
		],
		"wrongAnswersArray": [
			"Configure a NAT gateway to replace the NAT instances.",
			"Configure an interface endpoint for traffic destined to Amazon S3.",
			"Configure Amazon CloudFront for the S3 bucket storing the images."
		]
	},
	{
		"question": "A company has created a multi-tier application for its ecommerce website. The website uses an Application Load Balancer that resides in the public subnets, a web tier in the public subnets, and a MySQL cluster hosted on Amazon EC2 instances in the private subnets. The MySQL database needs to retrieve product catalog and pricing information that is hosted on the internet by a third-party provider. A solutions architect must devices a strategy that maximizes security without increasing operational overhead. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Deploy a NAT gateway in the public subnets. Modify the private subnet route table to direct all internet-bound traffic to the NAT gateway."
		],
		"wrongAnswersArray": [
			"Configure an internet gateway and attach it to the VPC. Modify the private subnet route table to direct internet-bound traffic to the internet gateway.",
			"Deploy a NAT instance in the VPC. Route all the internet-based traffic through the NAT instance.",
			"Configure a virtual private gateway and attach it to the VPC. Modify the private subnet route table to direct internet-bound traffic to the virtual private gateway."
		]
	},
	{
		"question": "A company has developed a microservices application. It uses a client-facing API with Amazon API Gateway and multiple internal services hosted on Amazon EC2 instances to process user requests. The API is designed to support unpredictable surges in traffic, but internal services may become overwhelmed and unresponsive for a period of time during surges. A solutions architect needs to design a more reliable solution that reduces errors when internal services become unresponsive or unavailable. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use Amazon Simple Queue Service (Amazon SQS) to store user requests as they arrive. Change the internal services to retrieve the requests from the queue for processing."
		],
		"wrongAnswersArray": [
			"Use AWS Auto Scaling to scale up internal services when there is a surge in traffic.",
			"Use an Elastic Load Balancer to distribute the traffic between internal services. Configure Amazon CloudWatch metrics to monitor traffic to internal services.",
			"Use different Availability Zones to host internal services. Send a notification to a system administrator when an internal service becomes unresponsive."
		]
	},
	{
		"question": "A company is backing up on-premises databases to local file server shares using the SMB protocol. The company requires immediate access to 1 week of backup files to meet recovery objectives. Recovery after a week is less likely to occur, and the company can tolerate a delay in accessing those older backup files. What should a solutions architect do to meet these requirements with the LEAST operational effort?",
		"correctAnswersArray": [
			"Deploy an AWS Storage Gateway file gateway with sufficient storage to hold 1 week of backups. Point the backups to SMB shares from the file gateway."
		],
		"wrongAnswersArray": [
			"Deploy Amazon FSx for Windows File Server to create a file system with exposed file shares with sufficient storage to hold all the desired backups.",
			"Continue to back up to the existing file shares. Deploy AWS Database Migration Service (AWS DMS) and define a copy task to copy backup files older than 1 week to Amazon S3, and delete the backup files from the local file store.",
			"Deploy Amazon Elastic File System (Amazon EFS) to create a file system with exposed NFS shares with sufficient storage to hold all the desired backups."
		]
	},
	{
		"question": "A companys website hosted on Amazon EC2 instances processes classified data stored in Amazon S3. Due to security concerns, the company requires a private and secure connection between its EC2 resources and Amazon S3. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Set up S3 bucket policies to allow access from a VPC endpoint."
		],
		"wrongAnswersArray": [
			"Set up a NAT gateway to access resources outside the private subnet.",
			"Set up an IAM policy to grant read-write access to the S3 bucket.",
			"Set up an access key ID and a secret access key to access the S3 bucket."
		]
	},
	{
		"question": "A company runs a production application on a fleet of Amazon EC2 instances. The application reads the data from an Amazon SQS queue and processes the messages in parallel. The message volume is unpredictable and often has intermittent traffic. This application should continually process messages without any downtime. Which solution meets these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Use Reserved Instances for the baseline capacity and use Spot Instances to handle additional capacity."
		],
		"wrongAnswersArray": [
			"Use Spot Instances exclusively to handle the maximum capacity required.",
			"Use Reserved Instances exclusively to handle the maximum capacity required.",
			"Use Reserved Instances for the baseline capacity and use On-Demand Instances to handle additional capacity."
		]
	},
	{
		"question": "Management has decided to deploy all AWS VPCs with IPv6 enabled. After some time, a solutions architect tries to launch a new instance and receives an error stating that there is not enough IP address space available in the subnet. What should the solutions architect do to fix this?",
		"correctAnswersArray": [
			"Disable the IPv4 subnet and migrate all instances to IPv6 only. Once that is complete, launch the instance."
		],
		"wrongAnswersArray": [
			"Check to make sure that only IPv6 was used during the VPC creation.",
			"Create a new IPv4 subnet with a larger range, and then launch the instance.",
			"Create a new IPv6-only subnet with a large range, and then launch the instance."
		]
	},
	{
		"question": "A company is hosting its static website in an Amazon S3 bucket, which is the origin for Amazon CloudFront. The company has users in the United States, Canada, and Europe and wants to reduce costs. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Modify the CloudFront price class to include only the locations of the countries that are served."
		],
		"wrongAnswersArray": [
			"Adjust the CloudFront caching time to live (TTL) from the default to a longer timeframe.",
			"Implement CloudFront events with Lambda@Edge to run the websites data processing.",
			"Implement a CloudFront Secure Sockets Layer (SSL) certificate to push security closer to the locations of the countries that are served."
		]
	},
	{
		"question": "A user wants to list the IAM role that is attached to their Amazon EC2 instance. The user has login access to the EC2 instance but does not have IAM permissions. What should a solutions architect do to retrieve this information?",
		"correctAnswersArray": [
			"Run the following EC2 command curl http //169.254.169.254/latest/meta-data/iam/info"
		],
		"wrongAnswersArray": [
			"Run the following AWS CLI command aws iam get-instance-profile --instance-profile-name ExampleInstanceProfile",
			"Run the following EC2 command curl http //169.254.169.254/latest/user-data/iam/info",
			"Run the following EC2 command http //169.254.169.254/latest/dynamic/instance-identity/"
		]
	},
	{
		"question": "A solutions architect is creating a new VPC design. There are two public subnets for the load balancer, two private subnets for web servers, and two private subnets for MySQL. The web servers use only HTTPS. The solutions architect has already created a security group for the load balancer allowing port 443 from 0.0.0.0/0. Company policy requires that each resource has the least access required to still be able to perform its tasks. Which additional configuration strategy should the solutions architect use to meet these requirements?",
		"correctAnswersArray": [
			"Create a security group for the web servers and allow port 443 from the load balancer. Create a security group for the MySQL servers and allow port 3306 from the web servers security group"
		],
		"wrongAnswersArray": [
			"Create a network ACL for the web servers and allow port 443 from the load balancer. Create a network ACL for the MySQL servers and allow port 3306 from the web servers security group.",
			"Create a network ACL for the web servers and allow port 443 from 0.0.0.0/0. Create a network ACL for the MySQL servers and allow port 3306 from the web servers security group.",
			"Create a security group for the web servers and allow port 443 from 0.0.0.0/0. Create a security group for the MySQL servers and allow port 3306 from the web servers security group."
		]
	},
	{
		"question": "A company wants to migrate its MySQL database from on premises to AWS. The company recently experienced a database outage that significantly impacted the business. To ensure this does not happen again, the company wants a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two nodes. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Create an Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data."
		],
		"wrongAnswersArray": [
			"Create an Amazon RDS DB instance with synchronous replication to three nodes in three Availability Zones.",
			"Create an Amazon RDS MySQL DB instance and then create a read replica in a separate AWS Region that synchronously replicates the data.",
			"Create an Amazon EC2 instance with a MySQL engine installed that triggers an AWS Lambda function to synchronously replicate the data to an Amazon RDS MySQL DB instance"
		]
	},
	{
		"question": "A companys near-real-time streaming application is running on AWS. As the data is ingested, a job runs on the data and takes 30 minutes to complete. The workload frequently experiences high latency due to large amounts of incoming data. A solutions architect needs to design a scalable and serverless solution to enhance performance. Which combination of steps should the solutions architect take? (Choose two.)",
		"correctAnswersArray": [
			"Use AWS Fargate with Amazon Elastic Container Service (Amazon ECS) to process the data."
		],
		"wrongAnswersArray": [
			"Use AWS Lambda with AWS Step Functions to process the data.",
			"Use Amazon Kinesis Data Firehose to ingest the data.",
			"Use Amazon EC2 instances in an Auto Scaling group to process the data.",
			"Use AWS Database Migration Service (AWS DMS) to ingest the data."
		]
	},
	{
		"question": "A company has an on-premises volume backup solution that has reached its end of life. The company wants to use AWS as part of a new backup solution and wants to maintain local access to all the data while it is backed up on AWS. The company wants to ensure that the data backed up on AWS is automatically and securely transferred. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use AWS Storage Gateway and configure a stored volume gateway. Run the Storage Gateway software appliance on premises and map the gateway storage volumes to on-premises storage. Mount the gateway storage volumes to provide local access to the data."
		],
		"wrongAnswersArray": [
			"Use AWS Snowball Edge to migrate data out of the on-premises solution to Amazon S3. Use the Snowball Edge file interface to provide on-premises systems with local access to the data.",
			"Use AWS Snowball to migrate data out of the on-premises solution to Amazon S3. Configure on-premises systems to mount the Snowball S3 endpoint to provide local access to the data.",
			"Use AWS Storage Gateway and configure a cached volume gateway. Run the Storage Gateway software appliance on premises and configure a percentage of data to cache locally. Mount the gateway storage volumes to provide local access to the data."
		]
	},
	{
		"question": "A company hosts its multi-tier public web application in the AWS Cloud. The web application runs on Amazon EC2 instances and its database runs on Amazon RDS. The company is anticipating a large increase in sales during an upcoming holiday weekend. A solutions architect needs to build a solution to analyze the performance of the web application with a granularity of no more than 2 minutes. What should the solutions architect do to meet this requirement?",
		"correctAnswersArray": [
			"Enable detailed monitoring on all EC2 instances. Use Amazon CloudWatch metrics to perform further analysis."
		],
		"wrongAnswersArray": [
			"Create an AWS Lambda function to fetch EC2 logs from Amazon CloudWatch Logs. Use Amazon CloudWatch metrics to perform further analysis.",
			"Send EC2 logs to Amazon S3. Use Amazon Redshift to fetch logs from the S3 bucket to process raw data for further analysis with Amazon QuickSight.",
			"Send Amazon CloudWatch logs to Amazon Redshift. Use Amazon QuickSight to perform further analysis."
		]
	},
	{
		"question": "A company is planning on deploying a newly built application on AWS in a default VPC. The application will consist of a web layer and database layer. The web server was created in public subnets, and the MySQL database was created in private subnets. All subnets are created with the default network ACL settings, and the default security group in the VPC will be replaced with new custom security groups. The following are the key requirements ✑ The web servers must be accessible only to users on an SSL connection. ✑ The database should be accessible to the web layer, which is created in a public subnet only. ✑ All traffic to and from the IP range 182.20.0.0/16 subnet should be blocked. Which combination of steps meets these requirements? (Select two.)",
		"correctAnswersArray": [
			"Create a database server security group with an inbound rule for MySQL port 3306 and specify the source as a web server security group.",
			"Create a web server security group with an inbound rule for HTTPS port 443 traffic from anywhere (0.0.0.0/0). Create network ACL inbound and outbound deny rules for IP range 182.20.0.0/16."
		],
		"wrongAnswersArray": [
			"Create a web server security group with an inbound allow rule for HTTPS port 443 traffic from anywhere (0.0.0.0/0) and an inbound deny rule for IP range 182.20.0.0/16.",
			"Create a web server security group with inbound and outbound rules for HTTPS port 443 traffic to and from anywhere (0.0.0.0/0). Create a network ACL inbound deny rule for IP range 182.20.0.0/16.",
			"Create a database server security group with inbound and outbound rules for MySQL port 3306 traffic to and from anywhere (0 0.0.0/0)."
		]
	},
	{
		"question": "A company is developing an ecommerce application that will consist of a load-balanced front end, a container-based application, and a relational database. A solutions architect needs to create a highly available solution that operates with as little manual intervention as possible. Which solutions meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Create an Amazon RDS DB instance in Multi-AZ mode.",
			"Create an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load."
		],
		"wrongAnswersArray": [
			"Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type to handle the dynamic application load.",
			"Create an Amazon RDS DB instance and one or more replicas in another Availability Zone.",
			"Create an Amazon EC2 instance-based Docker cluster to handle the dynamic application load."
		]
	},
	{
		"question": "A company is planning to migrate a commercial off-the-shelf application from its on-premises data center to AWS. The software has a software licensing model using sockets and cores with predictable capacity and uptime requirements. The company wants to use its existing licenses, which were purchased earlier this year. Which Amazon EC2 pricing option is the MOST cost-effective?",
		"correctAnswersArray": [
			"Dedicated Reserved Hosts"
		],
		"wrongAnswersArray": [
			"Dedicated On-Demand Hosts",
			"Dedicated Reserved Instances",
			"Dedicated On-Demand Instances"
		]
	},
	{
		"question": "A company is developing a mobile game that streams score updates to a backend processor and then posts results on a leaderboard. A solutions architect needs to design a solution that can handle large traffic spikes, process the mobile game updates in order of receipt, and store the processed updates in a highly available database. The company also wants to minimize the management overhead required to maintain the solution. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Push score updates to Amazon Kinesis Data Streams. Process the updates in Kinesis Data Streams with AWS Lambda. Store the processed updates in Amazon DynamoDB."
		],
		"wrongAnswersArray": [
			"Push score updates to an Amazon Simple Queue Service (Amazon SQS) queue. Use a fleet of Amazon EC2 instances with Auto Scaling to process the updates in the SQS queue. Store the processed updates in an Amazon RDS Multi-AZ DB instance.",
			"Push score updates to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe an AWS Lambda function to the SNS topic to process the updates. Store the processed updates in a SQL database running on Amazon EC2.",
			"Push score updates to Amazon Kinesis Data Streams. Process the updates with a fleet of Amazon EC2 instances set up for Auto Scaling. Store the processed updates in Amazon Redshift."
		]
	},
	{
		"question": "A company serves a multilingual website from a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). This architecture is currently running in the us-west-1 Region but is exhibiting high request latency for users located in other parts of the world. The website needs to serve requests quickly and efficiently regardless of a userג€™s location. However, the company does not want to recreate the existing architecture across multiple Regions. How should a solutions architect accomplish this?",
		"correctAnswersArray": [
			"Configure an Amazon CloudFront distribution with the ALB as the origin. Set the cache behavior settings to only cache based on the Accept-Language request header."
		],
		"wrongAnswersArray": [
			"Replace the existing architecture with a website served from an Amazon S3 bucket. Configure an Amazon CloudFront distribution with the S3 bucket as the origin.",
			"Launch an EC2 instance in each additional Region and configure NGINX to act as a cache server for that Region. Put all the instances plus the ALB behind an Amazon Route 53 record set with geo-location routing policy",
			"Set up Amazon API Gateway with the ALB as an integration. Configure API Gateway to use an HTTP integration type. Set up an API Gateway stage to enable the API cache."
		]
	},
	{
		"question": "A company has an automobile sales website that stores its listings in a database on Amazon RDS. When an automobile is sold, the listing needs to be removed from the website and the data must be sent to multiple target systems. Which design should a solutions architect recommend?",
		"correctAnswersArray": [
			"Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets."
		],
		"wrongAnswersArray": [
			"Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) queue for the targets to consume.",
			"Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) FIFO queue for the targets to consume.",
			"Subscribe to an RDS event notification and send an Amazon Simple Queue Service (Amazon SQS) queue fanned out to multiple Amazon Simple Notification Service (Amazon SNS) topics. Use AWS Lambda functions to update the targets."
		]
	},
	{
		"question": "A company is moving its on-premises applications to Amazon EC2 instances. However, as a result of fluctuating compute requirements, the EC2 instances must always be ready to use between 8 AM and 5 PM in specific Availability Zones. Which EC2 instances should the company choose to run the applications?",
		"correctAnswersArray": [
			"Scheduled Reserved Instances"
		],
		"wrongAnswersArray": [
			"On-Demand Instances",
			"EC2 instances in an Auto Scaling group",
			"Spot Instances as part of a Spot Fleet"
		]
	},
	{
		"question": "A solutions architect needs to ensure that all Amazon Elastic Block Store (Amazon EBS) volumes restored from unencrypted EBC snapshots are encrypted. What should the solutions architect do to accomplish this?",
		"correctAnswersArray": [
			"Enable EBS encryption by default for the AWS Region."
		],
		"wrongAnswersArray": [
			"Create a new volume and specify the symmetric customer master key (CMK) to use for encryption.",
			"Enable EBS encryption by default for the specific volumes.",
			"Create a new volume and specify the asymmetric customer master key (CMK) to use for encryption."
		]
	},
	{
		"question": "A company has an application that is hosted on Amazon EC2 instances in two private subnets. A solutions architect must make the application available on the public internet with the least amount of administrative effort. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Create a load balancer and associate two public subnets from the same Availability Zones as the private instances. Add the private instances to the load balancer."
		],
		"wrongAnswersArray": [
			"Create a load balancer and associate two private subnets from the same Availability Zones as the private instances. Add the private instances to the load balancer.",
			"Create an Amazon Machine Image (AMI) of the instances in the private subnet and restore in the public subnet. Create a load balancer and associate two private subnets from the same Availability Zones as the public instances.",
			"Create an Amazon Machine Image (AMI) of the instances in the private subnet and restore in the public subnet. Create a load balancer and associate two public subnets from the same Availability Zones as the public instances."
		]
	},
	{
		"question": "A company has an application that ingests incoming messages. These messages are then quickly consumed by dozens of other applications and microservices. The number of messages varies drastically and sometimes spikes as high as 100,000 each second. The company wants to decouple the solution and increase scalability. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with one or more Amazon Simple Queue Service (Amazon SQS) subscriptions. All applications then process the messages from the queues."
		],
		"wrongAnswersArray": [
			"Deploy the application on Amazon EC2 instances in an Auto Scaling group, which scales the number of EC2 instances based on CPU metrics.",
			"Write the messages to Amazon Kinesis Data Streams with a single shard. All applications will read from the stream and process the messages.",
			"Persist the messages to Amazon Kinesis Data Analytics. All the applications will read and process the messages."
		]
	},
	{
		"question": "A company has developed a microservices application. It uses a client-facing API with Amazon API Gateway and multiple internal services hosted on Amazon EC2 instances to process user requests. The API is designed to support unpredictable surges in traffic, but internal services may become overwhelmed and unresponsive for a period of time during surges. A solutions architect needs to design a more reliable solution that reduces errors when internal services become unresponsive or unavailable. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use Amazon Simple Queue Service (Amazon SQS) to store user requests as they arrive. Change the internal services to retrieve the requests from the queue for processing."
		],
		"wrongAnswersArray": [
			"Use an Elastic Load Balancer to distribute the traffic between internal services. Configure Amazon CloudWatch metrics to monitor traffic to internal services.",
			"Use different Availability Zones to host internal services. Send a notification to a system administrator when an internal service becomes unresponsive.",
			"Use AWS Auto Scaling to scale up internal services when there is a surge in traffic."
		]
	},
	{
		"question": "A company has a build server that is in an Auto Scaling group and often has multiple Linux instances running. The build server requires consistent and mountable shared NFS storage for jobs and configurations. Which storage option should a solutions architect recommend?",
		"correctAnswersArray": [
			"Amazon Elastic File System (Amazon EFS)"
		],
		"wrongAnswersArray": [
			"Amazon S3",
			"Amazon FSx",
			"Amazon Elastic Block Store (Amazon EBS)"
		]
	},
	{
		"question": "A company receives inconsistent service from its data center provider because the company is headquartered in an area affected by natural disasters. The company is not ready to fully migrate to the AWS Cloud, but it wants a failure environment on AWS in case the on-premises data center fails. The company runs web servers that connect to external vendors. The data available on AWS and on premises must be uniform. Which solution should a solutions architect recommend that has the LEAST amount of downtime?",
		"correctAnswersArray": [
			"Configure an Amazon Route 53 failover record. Run application servers on Amazon EC2 instances behind an Application Load Balancer in an Auto Scaling group. Set up AWS Storage Gateway with stored volumes to back up data to Amazon S3."
		],
		"wrongAnswersArray": [
			"Configure an Amazon Route 53 failover record. Run an AWS Lambda function to execute an AWS CloudFormation template to launch two Amazon EC2 instances. Set up AWS Storage Gateway with stored volumes to back up data to Amazon S3. Set up an AWS Direct Connect connection between a VPC and the data center.",
			"Configure an Amazon Route 53 failover record. Execute an AWS CloudFormation template from a script to create Amazon EC2 instances behind an Application Load Balancer. Set up AWS Storage Gateway with stored volumes to back up data to Amazon S3.",
			"Configure an Amazon Route 53 failover record. Set up an AWS Direct Connect connection between a VPC and the data center. Run application servers on Amazon EC2 in an Auto Scaling group. Run an AWS Lambda function to execute an AWS CloudFormation template to create an Application Load Balancer."
		]
	},
	{
		"question": "A company has copied 1 PB of data from a colocation facility to an Amazon S3 bucket in the us-east-1 Region using an AWS Direct Connect link. The company now wants to copy the data to another S3 bucket in the us-west-2 Region. The colocation facility does not allow the use of AWS Snowball. What should a solutions architect recommend to accomplish this?",
		"correctAnswersArray": [
			"Add a cross-Region replication configuration to copy objects across S3 buckets in different Regions."
		],
		"wrongAnswersArray": [
			"Use the aws S3 sync command to copy data from the source bucket to the destination bucket.",
			"Order a Snowball Edge device to copy the data from one Region to another Region.",
			"Transfer contents from the source S3 bucket to a target S3 bucket using the S3 console."
		]
	},
	{
		"question": "A company is using a third-party vendor to manage its marketplace analytics. The vendor needs limited programmatic access to resources in the company's account. All the needed policies have been created to grant appropriate access. Which additional component will provide the vendor with the MOST secure access to the account?",
		"correctAnswersArray": [
			"Use a cross-account role with an external ID."
		],
		"wrongAnswersArray": [
			"Configure a single sign-on (SSO) identity provider.",
			"Implement a service control policy (SCP)",
			"Create an IAM user."
		]
	},
	{
		"question": "A company is designing a website that uses an Amazon S3 bucket to store static images. The company wants all future requests to have faster response times while reducing both latency and cost. Which service configuration should a solutions architect recommend?",
		"correctAnswersArray": [
			"Deploy Amazon CloudFront in front of Amazon S3."
		],
		"wrongAnswersArray": [
			"Configure Auto Scaling to automatically adjust the capacity of the website.",
			"Deploy a NAT server in front of Amazon S3.",
			"Deploy a Network Load Balancer in front of Amazon S3."
		]
	},
	{
		"question": "A company has a highly dynamic batch processing job that uses many Amazon EC2 instances to complete it. The job is stateless in nature, can be started and stopped at any given time with no negative impact, and typically takes upwards of 60 minutes total to complete. The company has asked a solutions architect to design a scalable and cost-effective solution that meets the requirements of the job. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Implement EC2 Spot Instances."
		],
		"wrongAnswersArray": [
			"Implement the processing on AWS Lambda.",
			"Purchase EC2 Reserved Instances.",
			"Implement EC2 On-Demand Instances."
		]
	},
	{
		"question": "A company wants to move a multi-tiered application from on premises to the AWS Cloud to improve the applicationג€™s performance. The application consists of application tiers that communicate with each other by way of RESTful services. Transactions are dropped when one tier becomes overloaded. A solutions architect must design a solution that resolves these issues and modernizes the application. Which solution meets these requirements and is the MOST operationally efficient?",
		"correctAnswersArray": [
			"Use Amazon API Gateway and direct transactions to the AWS Lambda functions as the application layer. Use Amazon Simple Queue Service (Amazon SQS) as the communication layer between application services."
		],
		"wrongAnswersArray": [
			"Use Amazon Simple Queue Service (Amazon SQS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SQS queue length and scale up when communication failures are detected.",
			"Use Amazon Simple Notification Service (Amazon SNS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SNS queue length and scale up and down as required.",
			"Use Amazon CloudWatch metrics to analyze the application performance history to determine the serverג€™s peak utilization during the performance failures. Increase the size of the application serverג€™s Amazon EC2 instances to meet the peak requirements."
		]
	},
	{
		"question": "A company is launching a new application deployed on an Amazon Elastic Container Service (Amazon ECS) cluster and is using the Fargate launch type for ECS tasks. The company is monitoring CPU and memory usage because it is expecting high traffic to the application upon its launch. However, the company wants to reduce costs when utilization decreases. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use AWS Application Auto Scaling with target tracking policies to scale when ECS metric breaches trigger an Amazon CloudWatch alarm."
		],
		"wrongAnswersArray": [
			"Use Amazon EC2 Auto Scaling with simple scaling policies to scale when ECS metric breaches trigger an Amazon CloudWatch alarm.",
			"Use Amazon EC2 Auto Scaling to scale at certain periods based on previous traffic patterns.",
			"Use an AWS Lambda function to scale Amazon ECS based on metric breaches that trigger an Amazon CloudWatch alarm."
		]
	},
	{
		"question": "A company is building a media sharing application and decides to use Amazon S3 for storage. When a media file is uploaded, the company starts a multi-step process to create thumbnails, identify objects in the images, transcode videos into standard formats and resolutions, and extract and store the metadata to an Amazon DynamoDB table. The metadata is used for searching and navigation. The amount of traffic is variable. The solution must be able to scale to handle spikes in load without unnecessary expenses. What should a solutions architect recommend to support this workload?",
		"correctAnswersArray": [
			"Trigger AWS Step Functions when an object is stored in the S3 bucket. Have the Step Functions perform the steps needed to process the object and then write the metadata to the DynamoDB table."
		],
		"wrongAnswersArray": [
			"Build the processing into the website or mobile app used to upload the content to Amazon S3. Save the required data to the DynamoDB table when the objects are uploaded.",
			"Trigger an AWS Lambda function when an object is stored in the S3 bucket. Have the Lambda function start AWS Batch to perform the steps to process the object. Place the object data in the DynamoDB table when complete.",
			"Trigger an AWS Lambda function to store an initial entry in the DynamoDB table when an object is uploaded to Amazon S3. Use a program running on an Amazon EC2 instance in an Auto Scaling group to poll the index for unprocessed items, and use the program to perform the processing."
		]
	},
	{
		"question": "A company has a hybrid application hosted on multiple on-premises servers with static IP addresses. There is already a VPN that provides connectivity between the VPC and the on-premises network. The company wants to distribute TCP traffic across the on-premises servers for internet users. What should a solutions architect recommend to provide a highly available and scalable solution?",
		"correctAnswersArray": [
			"Launch an internet-facing Network Load Balancer (NLB) and register on-premises IP addresses with the NLB."
		],
		"wrongAnswersArray": [
			"Launch an Amazon EC2 instance, attach an Elastic IP address, and distribute traffic to the on-premises servers.",
			"Launch an Amazon EC2 instance with public IP addresses in an Auto Scaling group and distribute traffic to the on-premises servers.",
			"Launch an internet-facing Application Load Balancer (ALB) and register on-premises IP addresses with the ALB."
		]
	},
	{
		"question": "A company has two applications a sender application that sends messages with payloads to be processed and a processing application intended to receive messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed. If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages. Which solution meets these requirements and is the MOST operationally efficient?",
		"correctAnswersArray": [
			"Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue. Configure a dead-letter queue to collect the messages that failed to process."
		],
		"wrongAnswersArray": [
			"Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).",
			"Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively.",
			"Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic."
		]
	},
	{
		"question": "A company runs an application on an Amazon EC2 instance backed by Amazon Elastic Block Store (Amazon EBS). The instance needs to be available for 12 hours daily. The company wants to save costs by making the instance unavailable outside the window required for the application. However, the contents of the instances memory must be preserved whenever the instance is unavailable. What should a solutions architect do to meet this requirement?",
		"correctAnswersArray": [
			"Hibernate the instance outside the applications availability window. Start up the instance again when required."
		],
		"wrongAnswersArray": [
			"Stop the instance outside the applications availability window. Start up the instance again when required.",
			"Use Auto Scaling to scale down the instance outside the applications availability window. Scale up the instance when required.",
			"Terminate the instance outside the applications availability window. Launch the instance by using a preconfigured Amazon Machine Image (AMI) when required."
		]
	},
	{
		"question": "A business application is hosted on Amazon EC2 and uses Amazon S3 for encrypted object storage. The chief information security officer has directed that no application traffic between the two services should traverse the public internet. Which capability should the solutions architect use to meet the compliance requirements?",
		"correctAnswersArray": [
			"VPC endpoint"
		],
		"wrongAnswersArray": [
			"AWS Key Management Service (AWS KMS)",
			"Private subnet",
			"Virtual private gateway"
		]
	},
	{
		"question": "An application is running on an Amazon EC2 instance and must have millisecond latency when running the workload. The application makes many small reads and writes to the file system, but the file system itself is small. Which Amazon Elastic Block Store (Amazon EBS) volume type should a solutions architect attach to their EC2 instance?",
		"correctAnswersArray": [
			"General Purpose SSD (gp2)"
		],
		"wrongAnswersArray": [
			"Cold HDD (sc1)",
			"Provisioned IOPS SSD (io1)",
			"Throughput Optimized HDD (st1)"
		]
	},
	{
		"question": "A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances behind an Elastic Load Balancer in an Auto Scaling group and with an Amazon DynamoDB table. The company wants to ensure the application can be made available in another AWS Region with minimal downtime. What should a solutions architect do to meet these requirements with the LEAST amount of downtime?",
		"correctAnswersArray": [
			"Create an Auto Scaling group and a load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Regionג€™s load balancer."
		],
		"wrongAnswersArray": [
			"Create an Auto Scaling group and load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Create an Amazon CloudWatch alarm to trigger and AWS Lambda function that updates Amazon Route 53 pointing to the disaster recovery load balancer.",
			"Create an AWS CloudFormation template to create EC2 instances, load balancers, and DynamoDB tables to be executed when needed. Configure DNS failover to point to the new disaster recovery Regionג€™s load balancer.",
			"Create an AWS CloudFormation template to create EC2 instances and a load balancer to be executed when needed. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Regionג€™s load balancer."
		]
	},
	{
		"question": "A solutions architect is designing a multi-Region disaster recovery solution for an application that will provide public API access. The application will use Amazon EC2 instances with a userdata script to load application code and an Amazon RDS for MySQL database. The Recovery Time Objective (RTO) is 3 hours and the Recovery Point Objective (RPO) is 24 hours. Which architecture would meet these requirements at the LOWEST cost?",
		"correctAnswersArray": [
			"Use Amazon Route 53 for Region failover. Deploy new EC2 instances with the userdata script for APIs, and create a snapshot of the RDS instance daily for a backup. Replicate the snapshot to a backup Region."
		],
		"wrongAnswersArray": [
			"Use Amazon Route 53 for Region failover. Deploy new EC2 instances with the userdata script. Create a read replica of the RDS instance in a backup Region.",
			"Use Amazon API Gateway for the public APIs and Region failover. Deploy new EC2 instances with the userdata script. Create a MySQL read replica of the RDS instance in a backup Region.",
			"Use an Application Load Balancer for Region failover. Deploy new EC2 instances with the userdata script. Deploy separate RDS instances in each Region."
		]
	},
	{
		"question": "A solutions architect is designing a solution that requires frequent updates to a website that is hosted on Amazon S3 with versioning enabled. For compliance reasons, the older versions of the objects will not be accessed frequently and will need to be deleted after 2 years. What should the solutions architect recommend to meet these requirements at the LOWEST cost?",
		"correctAnswersArray": [
			"Configure an S3 Lifecycle policy to transition older versions of objects to S3 Glacier. Expire the objects after 2 years."
		],
		"wrongAnswersArray": [
			"Enable S3 Event Notifications on the bucket that sends older objects to the Amazon Simple Queue Service (Amazon SQS) queue for further processing.",
			"Replicate older object versions to a new bucket. Use an S3 Lifecycle policy to expire the objects in the new bucket after 2 years.",
			"Use S3 batch operations to replace object tags. Expire the objects based on the modified tags."
		]
	},
	{
		"question": "A solutions architect is designing a new API using Amazon API Gateway that will receive requests from users. The volume of requests is highly variable; several hours can pass without receiving a single request. The data processing will take place asynchronously, but should be completed within a few seconds after a request is made. Which compute service should the solutions architect have the API invoke to deliver the requirements at the lowest cost?",
		"correctAnswersArray": [
			"An AWS Lambda function"
		],
		"wrongAnswersArray": [
			"A containerized service hosted in Amazon Elastic Kubernetes Service (Amazon EKS)",
			"A containerized service hosted in Amazon ECS with Amazon EC2",
			"An AWS Glue job"
		]
	},
	{
		"question": "A company is building an application on Amazon EC2 instances that generates temporary transactional data. The application requires access to data storage that can provide configurable and consistent IOPS. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Provision an EC2 instance with a General Purpose SSD (gp2) root volume and Provisioned IOPS SSD (io1) data volume."
		],
		"wrongAnswersArray": [
			"Provision an EC2 instance with a General Purpose SSD (gp2) root volume. Configure the application to store its data in an Amazon S3 bucket.",
			"Provision an EC2 instance with a Throughput Optimized HDD (st1) root volume and a Cold HDD (sc1) data volume.",
			"Provision an EC2 instance with a Throughput Optimized HDD (st1) volume that will serve as the root and data volume."
		]
	},
	{
		"question": "The financial application at a company stores monthly reports in an Amazon S3 bucket. The vice president of finance has mandated that all access to these reports be logged and that any modifications to the log files be detected. Which actions can a solutions architect take to meet these requirements?",
		"correctAnswersArray": [
			"Use AWS CloudTrail to create a new trail. Configure the trail to log read and write data events on the S3 bucket that houses the reports. Log these events to a new bucket, and enable log file validation."
		],
		"wrongAnswersArray": [
			"Use AWS CloudTrail to create a new trail. Configure the trail to log read and write management events on the S3 bucket that houses the reports. Log these events to a new bucket, and enable log file validation.",
			"Use S3 server access logging on the bucket that houses the reports with the read and write data events and log file validation options enabled.",
			"Use S3 server access logging on the bucket that houses the reports with the read and write management events and log file validation options enabled."
		]
	},
	{
		"question": "A company hosts historical weather records in Amazon S3. The records are downloaded from the companyג€™s website by a way of a URL that resolves to a domain name. Users all over the world access this content through subscriptions. A third-party provider hosts the companyג€™s root domain name, but the company recently migrated some of its services to Amazon Route 53. The company wants to consolidate contracts, reduce latency for users, and reduce costs related to serving the application to subscribers. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Create a web distribution on Amazon CloudFront to serve the S3 content for the application. Create an ALIAS record in the Amazon Route 53 hosted zone that points to the CloudFront distribution, resolving to the applicationג€™s URL domain name."
		],
		"wrongAnswersArray": [
			"Create an A record in a Route 53 hosted zone for the application. Create a Route 53 traffic policy for the web application, and configure a geolocation rule. Configure health checks to check the health of the endpoint and route DNS queries to other endpoints if an endpoint is unhealthy.",
			"Create an A record in a Route 53 hosted zone for the application. Create a Route 53 traffic policy for the web application, and configure a geoproximity rule. Configure health checks to check the health of the endpoint and route DNS queries to other endpoints if an endpoint is unhealthy.",
			"Create a web distribution on Amazon CloudFront to serve the S3 content for the application. Create a CNAME record in a Route 53 hosted zone that points to the CloudFront distribution, resolving to the applicationג€™s URL domain name."
		]
	},
	{
		"question": "A solutions architect is designing the cloud architecture for a company that needs to host hundreds of machine learning models for its users. During startup, the models need to load up to 10 GB of data from Amazon S3 into memory, but they do not need disk access. Most of the models are used sporadically, but the users expect all of them to be highly available and accessible with low latency. Which solution meets the requirements and is MOST cost-effective?",
		"correctAnswersArray": [
			"Deploy models as AWS Lambda functions behind a single Amazon API Gateway with path-based routing where one path corresponds to each model."
		],
		"wrongAnswersArray": [
			"Deploy models as AWS Lambda functions behind an Amazon API Gateway for each model.",
			"Deploy models as Amazon Elastic Container Service (Amazon ECS) services behind a single Application Load Balancer with path-based routing where one path corresponds to each model.",
			"Deploy models as Amazon Elastic Container Service (Amazon ECS) services behind an Application Load Balancer for each model."
		]
	},
	{
		"question": "A company needs to comply with a regulatory requirement that states all emails must be stored and archived externally for 7 years. An administrator has created compressed email files on premises and wants a managed service to transfer the files to AWS storage. Which managed service should a solutions architect recommend?",
		"correctAnswersArray": [
			"AWS Storage Gateway"
		],
		"wrongAnswersArray": [
			"AWS Backup",
			"Amazon Elastic File System (Amazon EFS)",
			"Amazon S3 Glacier"
		]
	},
	{
		"question": "A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers are worried about accidental deletion of documents in the S3 bucket and want a more secure solution. What should a solutions architect do to secure the audit documents?",
		"correctAnswersArray": [
			"Enable the versioning and MFA Delete features on the S3 bucket."
		],
		"wrongAnswersArray": [
			"Add an S3 Lifecycle policy to the audit teams IAM user accounts to deny the s3 DeleteObject action during audit dates.",
			"Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user accounts from accessing the KMS key.",
			"Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account."
		]
	},
	{
		"question": "A company stores user data in AWS. The data is used continuously with peak usage during business hours. Access patterns vary, with some data not being used for months at a time. A solutions architect must choose a cost-effective solution that maintains the highest level of durability while maintaining high availability. Which storage solution meets these requirements?",
		"correctAnswersArray": [
			"Amazon S3 Intelligent-Tiering"
		],
		"wrongAnswersArray": [
			"Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)",
			"Amazon S3 Standard",
			"Amazon S3 Glacier Deep Archive"
		]
	},
	{
		"question": "A company hosts a training site on a fleet of Amazon EC2 instances. The company anticipates that its new course, which consists of dozens of training videos on the site, will be extremely popular when it is released in 1 week. What should a solutions architect do to minimize the anticipated server load?",
		"correctAnswersArray": [
			"Store the videos in an Amazon S3 bucket. Create an Amazon CloudFront distribution with an origin access identity (OAI) of that S3 bucket. Restrict Amazon S3 access to the OAI."
		],
		"wrongAnswersArray": [
			"Store the videos in Amazon Elastic File System (Amazon EFS). Create a user data script for the web servers to mount the EFS volume.",
			"Store the videos in Amazon ElastiCache for Redis. Update the web servers to serve the videos using the ElastiCache API.",
			"Store the videos in an Amazon S3 bucket. Create an AWS Storage Gateway file gateway to access the S3 bucket. Create a user data script for the web servers to mount the file gateway."
		]
	},
	{
		"question": "A company owns an asynchronous API that is used to ingest user requests and, based on the request type, dispatch requests to the appropriate microservice for processing. The company is using Amazon API Gateway to deploy the API front end, and an AWS Lambda function that invokes Amazon DynamoDB to store user requests before dispatching them to the processing microservices. The company provisioned as much DynamoDB throughput as its budget allows, but the company is still experiencing availability issues and is losing user requests. What should a solutions architect do to address this issue without impacting existing users?",
		"correctAnswersArray": [
			"Use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB."
		],
		"wrongAnswersArray": [
			"vAdd throttling on the API Gateway with server-side throttling limits.",
			"Create a secondary index in DynamoDB for the table with the user requests.",
			"Use DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB."
		]
	},
	{
		"question": "A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances, Amazon RDS DB instances, and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check. What should a solutions architect do to accomplish this?",
		"correctAnswersArray": [
			"Use AWS Config rules to define and detect resources that are not properly tagged."
		],
		"wrongAnswersArray": [
			"Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.",
			"Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.",
			"Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code."
		]
	},
	{
		"question": "A company provides an API to its users that automates inquiries for tax computations based on item prices. The company experiences a larger number of inquiries during the holiday season only that cause slower response times. A solutions architect needs to design a solution that is scalable and elastic. What should the solutions architect do to accomplish this?",
		"correctAnswersArray": [
			"Design a REST API using Amazon API Gateway that accepts the item names. API Gateway passes item names to AWS Lambda for tax computations."
		],
		"wrongAnswersArray": [
			"Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2 instance. API Gateway accepts and passes the item names to the EC2 instance for tax computations.",
			"Create an Application Load Balancer that has two Amazon EC2 instances behind it. The EC2 instances will compute the tax on the received item names.",
			"Provide an API hosted on an Amazon EC2 instance. The EC2 instance performs the required computations when the API request is made."
		]
	},
	{
		"question": "A solutions architect needs to design a resilient solution for Windows users home directories. The solution must provide fault tolerance, file-level backup and recovery, and access control, based upon the company's Active Directory. Which storage solution meets these requirements?",
		"correctAnswersArray": [
			"Configure a Multi-AZ file system with Amazon FSx for Windows File Server. Join Amazon FSx to Active Directory."
		],
		"wrongAnswersArray": [
			"Configure Amazon Elastic Block Store (Amazon EBS) to store the users home directories. Configure AWS Single Sign-On with Active Directory.",
			"Configure Amazon Elastic File System (Amazon EFS) for the users home directories. Configure AWS Single Sign-On with Active Directory.",
			"Configure Amazon S3 to store the users home directories. Join Amazon S3 to Active Directory."
		]
	},
	{
		"question": "A company runs a static website through its on-premises data center. The company has multiple servers that handle all of its traffic, but on busy days, services are interrupted and the website becomes unavailable. The company wants to expand its presence globally and plans to triple its website traffic. What should a solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Migrate the website content to Amazon S3 and host the website on Amazon CloudFront."
		],
		"wrongAnswersArray": [
			"Migrate the website content to Amazon EC2 instances with public Elastic IP addresses in multiple AWS Regions.",
			"Use Amazon Route 53 to distribute the loads across multiple Amazon CloudFront distributions for each AWS Region that exists globally.",
			"Migrate the website content to Amazon EC2 instances and vertically scale as the load increases."
		]
	},
	{
		"question": "A company wants to build an online marketplace application on AWS as a set of loosely coupled microservices. For this application, when a customer submits a new order, two microservices should handle the event simultaneously. The Email microservice will send a confirmation email, and the OrderProcessing microservice will start the order delivery process. If a customer cancels an order, the OrderCancellation and Email microservices should handle the event simultaneously. A solutions architect wants to use Amazon Simple Queue Service (Amazon SQS) and Amazon Simple Notification Service (Amazon SNS) to design the messaging between the microservices. How should the solutions architect design the solution?",
		"correctAnswersArray": [
			"Create an SNS topic and publish order events to it. Create three SQS queues for the Email, OrderProcessing, and OrderCancellation microservices. Subscribe all SQS queues to the SNS topic with message filtering"
		],
		"wrongAnswersArray": [
			"Create three SNS topics for each microservice. Publish order events to the three topics. Subscribe each of the Email, OrderProcessing, and OrderCancellation microservices to its own topic.",
			"Create two SQS queues and publish order events to both queues simultaneously. One queue is for the Email and OrderProcessing microservices. The second queue is for the Email and OrderCancellation microservices",
			"Create a single SQS queue and publish order events to it. The Email, OrderProcessing, and OrderCancellation microservices can then consume messages off the queue."
		]
	},
	{
		"question": "A media company is evaluating the possibility of moving its systems to the AWS Cloud. The company needs at least 10 TB of storage with the maximum possible I/O performance for video processing, 300 TB of very durable storage for storing media content, and 900 TB of storage to meet requirements for archival media that is not in use anymore. Which set of services should a solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage"
		],
		"wrongAnswersArray": [
			"Amazon EC2 instance store for maximum performance, Amazon EFS for durable data storage, and Amazon S3 for archival storage",
			"Amazon EBS for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage",
			"Amazon EBS for maximum performance, Amazon EFS for durable data storage, and Amazon S3 Glacier for archival storage"
		]
	},
	{
		"question": "A solutions architect is creating an application that will handle batch processing of large amounts of data. The input data will be held in Amazon S3 and the output data will be stored in a different S3 bucket. For processing, the application will transfer the data over the network between multiple Amazon EC2 instances. What should the solutions architect do to reduce the overall data transfer costs?",
		"correctAnswersArray": [
			"Place all the EC2 instances in the same Availability Zone."
		],
		"wrongAnswersArray": [
			"Place all the EC2 instances in private subnets in multiple Availability Zones.",
			"Place all the EC2 instances in an Auto Scaling group.",
			"Place all the EC2 instances in the same AWS Region"
		]
	},
	{
		"question": "A healthcare company stores highly sensitive patient records. Compliance requires that multiple copies be stored in different locations. Each record must be stored for 7 years. The company has a service level agreement (SLA) to provide records to government agencies immediately for the first 30 days and then within 4 hours of a request thereafter. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use Amazon S3 with cross-Region replication enabled. After 30 days, transition the data to Amazon S3 Glacier using a lifecycle policy."
		],
		"wrongAnswersArray": [
			"Use Amazon S3 with cross-origin resource sharing (CORS) enabled. After 30 days, transition the data to Amazon S3 Glacier using a lifecycle policy",
			"Use Amazon S3 with cross-origin resource sharing (CORS) enabled. After 30 days, transition the data to Amazon S3 Glacier Deep Archive using a lifecycle policy.",
			"Use Amazon S3 with cross-Region replication enabled. After 30 days, transition the data to Amazon S3 Glacier Deep Archive using a lifecycle policy."
		]
	},
	{
		"question": "A company is performing an AWS Well-Architected Framework review of an existing workload deployed on AWS. The review identified a public-facing website running on the same Amazon EC2 instance as a Microsoft Active Directory domain controller that was installed recently to support other AWS services. A solutions architect needs to recommend a new design that would improve the security of the architecture and minimize the administrative demand on IT staff. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Use AWS Directory Service to create a managed Active Directory. Uninstall Active Directory on the current EC2 instance."
		],
		"wrongAnswersArray": [
			"Use AWS Directory Service to create an Active Directory connector. Proxy Active Directory requests to the Active Directory domain controller running on the current EC2 instance.",
			"Enable AWS Single Sign-On (AWS SSO) with Security Assertion Markup Language (SAML) 2.0 federation with the Active Directory controller. Modify the EC2 instance's security group to deny public access to Active Directory.",
			"Create another EC2 instance in the same subnet and reinstall Active Directory on it. Uninstall Active Directory on the current EC2 instance."
		]
	},
	{
		"question": "A solutions architect is redesigning a monolithic application to be a loosely coupled application composed of two microservices Microservice A and Microservice B. Microservice A places messages in a main Amazon Simple Queue Service (Amazon SQS) queue for Microservice B to consume. When Microservice B fails to process a message after four retries, the message needs to be removed from the queue and stored for further investigation. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create an SQS dead-letter queue. Configure the main SQS queue to deliver messages to the dead-letter queue after the message has been received four times."
		],
		"wrongAnswersArray": [
			"Create an SQS dead-letter queue. Microservice B adds failed messages to that queue after it receives and fails to process the message four times.",
			"Create an SQS queue For failed messages. Configure the SQS queue for failed messages to pull messages from the main SQS queue after the original message has been received four times.",
			"Create an SQS queue for failed messages. Microservice A adds failed messages to that queue after Microservice B receives and fails to process the message four times."
		]
	},
	{
		"question": "A solutions architect is deploying a distributed database on multiple Amazon EC2 instances. The database stores all data on multiple instances so it can withstand the loss of an instance. The database requires block storage with latency and throughput to support several million transactions per second per server. Which storage solution should the solutions architect use?",
		"correctAnswersArray": [
			"Amazon EC2 instance store"
		],
		"wrongAnswersArray": [
			"Amazon EBS",
			"Amazon S3",
			"Amazon EFS"
		]
	},
	{
		"question": "A company is using Amazon Redshift for analytics and to generate customer reports. The company recently acquired 50 TB of additional customer demographic data. The data is stored in CSV files in Amazon S3. The company needs a solution that joins the data and visualizes the results with the least possible cost and effort. What should a solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon Athena to query the data in Amazon S3. Use Amazon QuickSight to join the data from Athena with the existing data in Amazon Redshift and to build the visualizations."
		],
		"wrongAnswersArray": [
			"Use Amazon Redshift Spectrum to query the data in Amazon S3 directly and join that data with the existing data in Amazon Redshift. Use Amazon QuickSight to build the visualizations.",
			"Increase the size of the Amazon Redshift cluster, and load the data from Amazon S3. Use Amazon EMR Notebooks to query the data and build the visualizations in Amazon Redshift.",
			"Export the data from the Amazon Redshift cluster into Apache Parquet files in Amazon S3. Use Amazon Elasticsearch Service (Amazon ES) to query the data. Use Kibana to visualize the results."
		]
	},
	{
		"question": "A company is running a web-based game in two Availability Zones in the us-west-2 Region. The web servers use an Application Load Balancer (ALB) in public subnets. The ALB has an SSL certificate from AWS Certificate Manager (ACM) with a custom domain name. The game is written in JavaScript and runs entirely in a user's web browser. The game is increasing in popularity in many countries around the world. The company wants to update the application architecture and optimize costs without compromising performance. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon S3 and create an S3 bucket in us-west-2. Deploy the HTML and JavaScript files to the S3 bucket. Use Amazon CloudFront and create a global distribution with the S3 bucket as the origin. Use ACM to create a new certificate for the distribution. Use Amazon Route 53 to update the application alias to point to the distribution."
		],
		"wrongAnswersArray": [
			"Use AWS CloudFormation to deploy the application stack to AWS Regions near countries where the game is popular. Use ACM to create a new certificate for each application instance. Use Amazon Route 53 with a geolocation- routing policy to direct traffic to the local application instance.",
			"Use Amazon S3 and create an S3 bucket in AWS Regions near countries where the game is popular. Deploy the HTML and JavaScript files to each S3 bucket. Use ACM to create a new certificate for each S3 bucket. Use Amazon Route 53 with a geolocation routing policy to direct traffic to the local S3 bucket",
			"Use Amazon CloudFront and create a global distribution that points to the ALB. Reuse the existing certificate from ACM for the CloudFront distribution. Use Amazon Route 53 to update the application alias to point to the distribution"
		]
	},
	{
		"question": "A company hosts its website on AWS. To address the highly variable demand, the company has implemented Amazon EC2 Auto Scaling. Management is concerned that the company is over-provisioning its infrastructure, especially at the front end of the three-tier application. A solutions architect needs to ensure costs are optimized without impacting performance. What should the solutions architect do to accomplish this?",
		"correctAnswersArray": [
			"Use Auto Scaling with a target tracking scaling policy."
		],
		"wrongAnswersArray": [
			"Use Auto Scaling with Reserved Instances",
			"Use Auto Scaling with a scheduled scaling policy",
			"vUse Auto Scaling with the suspend-resume feature"
		]
	},
	{
		"question": "A company is deploying an application that processes streaming data in near-real time. The company plans to use Amazon EC2 instances for the workload. The network architecture must be configurable to provide the lowest possible latency between nodes. Which combination of network solutions will meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"Run the EC2 instances in a cluster placement group.",
			"Enable and configure enhanced networking on each EC2 instance."
		],
		"wrongAnswersArray": [
			"Attach multiple elastic network interfaces to each EC2 instance.",
			"Group the EC2 instances in separate accounts.",
			"Use Amazon Elastic Block Store (Amazon EBS) optimized instance types.",
		]
	},
	{
		"question": "A company runs an application using Amazon ECS. The application creates resized versions of an original image and then makes Amazon S3 API calls to store the resized images in Amazon S3. How can a solutions architect ensure that the application has permission to access Amazon S3?",
		"correctAnswersArray": [
			"Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition."
		],
		"wrongAnswersArray": [
			"Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS cluster while logged in as this account.",
			"Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch configuration used by the ECS cluster.",
			"Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the container."
		]
	},
	{
		"question": "A company is developing an internal application that uses a PostgreSQL database. The company has decided to host the database on Amazon Aurora. The application does not need to be highly available, but data must be stored in multiple Availability Zones to maximize durability. Which database configuration meets these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"An Aurora PostgreSQL DB cluster with a single DB instance"
		],
		"wrongAnswersArray": [
			"An Aurora PostgreSQL DB cluster with a primary DB instance and a read replica",
			"An Aurora PostgreSQL global database cluster",
			"An Aurora PostgreSQL DB cluster with Multi-AZ deployment enabled"
		]
	},
	{
		"question": "A company wants to host a web application on AWS that will communicate to a database within a VPC. The application should be highly available. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Deploy a load balancer in multiple Availability Zones with an Auto Scaling group for the web servers, and then deploy Amazon RDS in multiple Availability Zones."
		],
		"wrongAnswersArray": [
			"Deploy two web servers with an Auto Scaling group, configure a domain that points to the two web servers, and then deploy a database architecture in multiple Availability Zones.",
			"Deploy a load balancer in the public subnet with an Auto Scaling group for the web servers, and then deploy the database on an Amazon EC2 instance in the private subnet.",
			"Create two Amazon EC2 instances to host the web servers behind a load balancer, and then deploy the database on a large instance."
		]
	},
	{
		"question": "A medical research lab produces data that is related to a new study. The lab wants to make the data available with minimum latency to clinics across the country for their on-premises, file-based applications. The data files are stored in an Amazon S3 bucket that has read-only permissions for each clinic. What should a solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Deploy an AWS Storage Gateway file gateway as a virtual machine (VM) on premises at each clinic."
		],
		"wrongAnswersArray": [
			"Migrate the files to each clinic's on-premises applications by using AWS DataSync for processing.",
			"Attach an Amazon Elastic File System (Amazon EFS) file system to each clinic's on-premises servers.",
			"Deploy an AWS Storage Gateway volume gateway as a virtual machine (VM) on premises at each clinic."
		]
	},
	{
		"question": "A company serves content to its subscribers across the world using an application running on AWS. The application has several Amazon EC2 instances in a private subnet behind an Application Load Balancer (ALB). Due to a recent change in copyright restrictions, the chief information officer (CIO) wants to block access for certain countries. Which action will meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon CloudFront to serve the application and deny access to blocked countries."
		],
		"wrongAnswersArray": [
			"Use ALB listener rules to return access denied responses to incoming traffic from blocked countries.",
			"Modify the ALB security group to deny incoming traffic from blocked countries.",
			"Modify the security group for EC2 instances to deny incoming traffic from blocked countries"
		]
	},
	{
		"question": "A company needs to connect its on-premises data center network to a new VPC. The data center network has a 100 Mbps symmetrical internet connection. An application that is running on premises will transfer multiple gigabytes of data each day. The application will use an Amazon Kinesis Data Firehose delivery stream for processing. What should a solutions architect recommend for maximum performance?",
		"correctAnswersArray": [
			"Use AWS PrivateLink to create an interface VPC endpoint for Kinesis Data Firehose in the VPC. Set up a 1 Gbps AWS Direct Connect connection between the on-premises network and AWS. Use the PrivateLink endpoint to send the data from on premises to Kinesis Data Firehose."
		],
		"wrongAnswersArray": [
			"Create an AWS Site-to-Site VPN connection between the on-premises network and the VPC. Configure BGP routing between the customer gateway and the virtual private gateway. Use the VPN connection to send the data from on premises to Kinesis Data Firehose.",
			"Create a VPC peering connection between the on-premises network and the VPC. Configure routing for the on-premises network to use the VPC peering connection.",
			"Procure an AWS Snowball Edge Storage Optimized device. After several days' worth of data has accumulated, copy the data to the device and ship the device to AWS for expedited transfer to Kinesis Data Firehose. Repeat as needed."
		]
	},
	{
		"question": "A company is hosting a high-traffic static website on Amazon S3 with an Amazon CloudFront distribution that has a default TTL of 0 seconds. The company wants to implement caching to improve performance for the website. However, the company also wants to ensure that stale content is not served for more than a few minutes after a deployment. Which combination of caching methods should a solutions architect implement to meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"Add a Cache-Control private directive to the objects in Amazon S3",
			"Set the CloudFront default TTL to 2 minutes."
		],
		"wrongAnswersArray": [
			"Add a Cache-Control max-age directive of 24 hours to the objects in Amazon S3. On deployment, create a CloudFront invalidation to purge any changed files from edge caches.",
			"Set a default TTL of 2 minutes on the S3 bucket",
			"Create an AWS Lambda@Edge function to add an Expires header to HTTP responses. Configure the function to run on viewer response."
		]
	},
	{
		"question": "A company has three VPCs named Development, Testing, and Production in the us-east-1 Region. The three VPCs need to be connected to an on-premises data center and are designed to be separate to maintain security and prevent any resource sharing. A solutions architect needs to find a scalable and secure solution. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Create an AWS Direct Connect connection and a VPN connection for each VPC to connect back to the data center."
		],
		"wrongAnswersArray": [
			"Create a new VPC called Network. Within the Network VPC, create an AWS Transit Gateway with an AWS Direct Connect connection back to the data center. Attach all the other VPCs to the Network VPC.",
			"Create VPC peers from all the VPCs to the Production VPC. Use an AWS Direct Connect connection from the Production VPC back to the data center.",
			"Connect VPN connections from all the VPCs to a VPN in the Production VPC. Use a VPN connection from the Production VPC back to the data center"
		]
	},
	{
		"question": "A company receives data from millions of users totaling about 1 TB each day. The company provides its users with usage reports going back 12 months. All usage data must be stored for at least 5 years to comply with regulatory and auditing requirements. Which storage solution is MOST cost-effective?",
		"correctAnswersArray": [
			"Store the data in Amazon S3 Standard. Set a lifecycle rule to transition the data to S3 Glacier Deep Archive after 1 year. Set a lifecycle rule to delete the data after 5 years."
		],
		"wrongAnswersArray": [
			"Store the data in Amazon S3 Standard. Set a lifecycle rule to transition the data to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 year. Set a lifecycle rule to delete the data after 5 years.",
			"Store the data in Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA). Set a lifecycle rule to transition the data to S3 Glacier after 1 year. Set the lifecycle rule to delete the data after 5 years.",
			"Store the data in Amazon S3 Standard. Set a lifecycle rule to transition the data to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Set a lifecycle rule to delete the data after 5 years."
		]
	},
	{
		"question": "A company maintains about 300 TB in Amazon S3 Standard storage month after month. The S3 objects are each typically around 50 GB in size and are frequently replaced with multipart uploads by their global application. The number and size of S3 objects remain constant, but the company's S3 storage costs are increasing each month. How should a solutions architect reduce costs in this situation?",
		"correctAnswersArray": [
			"Enable an S3 Lifecycle policy that deletes incomplete multipart uploads."
		],
		"wrongAnswersArray": [
			"Configure S3 inventory to prevent objects from being archived too quickly",
			"Switch from multipart uploads to Amazon S3 Transfer Acceleration.",
			"Configure Amazon CloudFront to reduce the number of objects stored in Amazon S3."
		]
	},
	{
		"question": "A company has a web application with sporadic usage patterns. There is heavy usage at the beginning of each month, moderate usage at the start of each week, and unpredictable usage during the week. The application consists of a web server and a MySQL database server running inside the data center. The company would like to move the application to the AWS Cloud, and needs to select a cost-effective database platform that will not require database modifications. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"MySQL-compatible Amazon Aurora Serverless"
		],
		"wrongAnswersArray": [
			"Amazon RDS for MySQL",
			"Amazon DynamoDB",
			"MySQL deployed on Amazon EC2 in an Auto Scaling group"
		]
	},
	{
		"question": "A solutions architect is designing the storage architecture for a new web application used for storing and viewing engineering drawings. All application components will be deployed on the AWS infrastructure. The application design must support caching to minimize the amount of time that users wait for the engineering drawings to load. The application must be able to store petabytes of data. Which combination of storage and caching should the solutions architect use?",
		"correctAnswersArray": [
			"Amazon S3 with Amazon CloudFront"
		],
		"wrongAnswersArray": [
			"Amazon S3 Glacier with Amazon ElastiCache",
			"Amazon Elastic Block Store (Amazon EBS) volumes with Amazon CloudFront",
			"AWS Storage Gateway with Amazon ElastiCache"
		]
	},
	{
		"question": "A company is reviewing a recent migration of a three-tier application to a VPC. The security team discovers that the principle of least privilege is not being applied to Amazon EC2 security group ingress and egress rules between the application tiers. What should a solutions architect do to correct this issue?",
		"correctAnswersArray": [
			"Create security group rules using the security group ID as the source or destination."
		],
		"wrongAnswersArray": [
			"Create security group rules using the subnet CIDR blocks as the source or destination.",
			"Create security group rules using the instance ID as the source or destination.",
			"Create security group rules using the VPC CIDR blocks as the source or destination."
		]
	},
	{
		"question": "A company has an image processing workload running on Amazon Elastic Container Service (Amazon ECS) in two private subnets. Each private subnet uses a NAT instance for internet access. All images are stored in Amazon S3 buckets. The company is concerned about the data transfer costs between Amazon ECS and Amazon S3. What should a solutions architect do to reduce costs?",
		"correctAnswersArray": [
			"Configure a gateway endpoint for traffic destined to Amazon S3."
		],
		"wrongAnswersArray": [
			"Configure an interface endpoint for traffic destined to Amazon S3.",
			"Configure Amazon CloudFront for the S3 bucket storing the images.",
			"Configure a NAT gateway to replace the NAT instances."
		]
	},
	{
		"question": "A company hosts its static website content from an Amazon S3 bucket in the us-east-1 Region. Content is made available through an Amazon CloudFront origin pointing to that bucket. Cross-Region replication is set up to create a second copy of the bucket in the ap-southeast-1 Region. Management wants a solution that provides greater availability for the website. Which combination of actions should a solutions architect take to increase availability? (Select TWO.)",
		"correctAnswersArray": [
			"Set up a CloudFront origin group with the us-east-1 bucket as the primary and the ap-southeast-1 bucket as the secondary."
		],
		"wrongAnswersArray": [
			"Create an additional CloudFront origin pointing to the ap-southeast-1 bucket.",
			"Configure failover routing in Amazon Route 53.",
			"Create a record in Amazon Route 53 pointing to the replica bucket.",
			"Add both buckets to the CloudFront origin."
		]
	},
	{
		"question": "A company that operates a web application on premises is preparing to launch a newer version of the application on AWS. The company needs to route requests to either the AWS-hosted or the on-premises-hosted application based on the URL query string. The on-premises application is not available from the internet, and a VPN connection is established between Amazon VPC and the company's data center. The company wants to use an Application Load Balancer (ALB) for this launch. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use one ALB with two target groups one for the AWS resource and one for on premises. Add hosts to each target group of the ALB. Configure listener rules based on the URL query string."
		],
		"wrongAnswersArray": [
			"Use one ALB with two AWS Auto Scaling groups one for the AWS resource and one for on premises. Add hosts to each Auto Scaling group. Route with Amazon Route 53 based on the URL query string.",
			"Use two ALBs one for on premises and one for the AWS resource. Add hosts to the target group of each ALB. Create a software router on an EC2 instance based on the URL query string.",
			"Use two ALBs one for on premises and one for the AWS resource. Add hosts to each target group of each ALB. Route with Amazon Route 53 based on the URL query string."
		]
	},
	{
		"question": "A company has a customer relationship management (CRM) application that stores data in an Amazon RDS DB instance that runs Microsoft SQL Server. The company's IT staff has administrative access to the database. The database contains sensitive data. The company wants to ensure that the data is not accessible to the IT staff and that only authorized personnel can view the data. What should a solutions architect do to secure the data?",
		"correctAnswersArray": [
			"Use Amazon RDS encryption with an AWS Key Management Service (AWS KMS) customer managed key."
		],
		"wrongAnswersArray": [
			"Use client-side encryption with an Amazon RDS managed key.",
			"Use Amazon RDS encryption with an AWS Key Management Service (AWS KMS) default encryption key.",
			"Use client-side encryption with an AWS Key Management Service (AWS KMS) customer managed key."
		]
	},
	{
		"question": "A company has a website running on Amazon EC2 instances across two Availability Zones. The company is expecting spikes in traffic on specific holidays, and wants to provide a consistent user experience. How can a solutions architect meet this requirement?",
		"correctAnswersArray": [
			"Use scheduled scaling"
		],
		"wrongAnswersArray": [
			"Use simple scaling.",
			"Use lifecycle hooks.",
			"Use step scaling."
		]
	},
	{
		"question": "A company is developing a real-time multiplayer game that uses UDP for communications between the client and servers in an Auto Scaling group. Spikes in demand are anticipated during the day, so the game server platform must adapt accordingly. Developers want to store gamer scores and other non-relational data in a database solution that will scale without intervention. Which solution should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use a Network Load Balancer for traffic distribution and Amazon DynamoDB on-demand for data storage."
		],
		"wrongAnswersArray": [
			"Use an Application Load Balancer for traffic distribution and Amazon DynamoDB global tables for data storage.",
			"Use a Network Load Balancer for traffic distribution and Amazon Aurora Global Database for data storage.",
			"Use Amazon Route 53 for traffic distribution and Amazon Aurora Serverless for data storage."
		]
	},
	{
		"question": "A company runs a website on Amazon EC2 instances behind an ELB Application Load Balancer. Amazon Route 53 is used for the DNS. The company wants to set up a backup website with a message including a phone number and email address that users can reach if the primary website is down. How should the company deploy this solution?",
		"correctAnswersArray": [
			"Use Amazon S3 website hosting for the backup website and a Route 53 failover routing policy."
		],
		"wrongAnswersArray": [
			"Deploy the application in another AWS Region and use server-side redirection on the primary website.",
			"Deploy the application in another AWS Region and use ELB health checks for failover routing.",
			"Use Amazon S3 website hosting for the backup website and a Route 53 latency routing policy."
		]
	},
	{
		"question": "A solutions architect is tasked with transferring 750 TB of data from a network-attached file system located at a branch office to Amazon S3 Glacier. The solution must avoid saturating the branch office's low-bandwidth internet connection. What is the MOST cost-effective solution?",
		"correctAnswersArray": [
			"Order 10 AWS Snowball appliances and select an Amazon S3 bucket as the destination. Create a lifecycle policy to transition the S3 objects to Amazon S3 Glacier."
		],
		"wrongAnswersArray": [
			"Order 10 AWS Snowball appliances and select an S3 Glacier vault as the destination. Create a bucket policy to enforce a VPC endpoint.",
			"Mount the network-attached file system to Amazon S3 and copy the files directly. Create a lifecycle policy to transition the S3 objects to Amazon S3 Glacier.",
			"Create a site-to-site VPN tunnel to an Amazon S3 bucket and transfer the files directly. Create a bucket policy to enforce a VPC endpoint."
		]
	},
	{
		"question": "A user wants to list the IAM role that is attached to their Amazon EC2 instance. The user has login access to the EC2 instance but does not have IAM permissions. What should a solutions architect do to retrieve this information?",
		"correctAnswersArray": [
			"Run the following EC2 command curl http//169.254.169.254/latest/meta-data/iam/info"
		],
		"wrongAnswersArray": [
			"Run the following AWS CLI command aws iam get-instance-profile --instance-profile-name ExampleInstanceProfile",
			"Run the following EC2 command http//169.254.169.254/latest/dynamic/instance-identity",
			"Run the following EC2 command curl http//169.254.169.254/latest/user-data/iam/info"
		]
	},
	{
		"question": "A solutions architect plans to convert a company's monolithic web application into a multi-tier application. The company wants to avoid managing its own infrastructure. The minimum requirements for the web application are high availability, scalability, and regional low latency during peak hours. The solution should also store and retrieve data with millisecond latency using the application's APL Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use Amazon API Gateway with an edge-optimized API endpoint, AWS Lambda for compute, and Amazon DynamoDB as the data store."
		],
		"wrongAnswersArray": [
			"Use an Amazon Route 53 routing policy with geolocation that points to an Amazon S3 bucket with static website hosting and Amazon DynamoDB as the data store.",
			"Use AWS Fargate to host the web application with backend Amazon RDS Multi-AZ DB instances.",
			"Use an Amazon CloudFront distribution that points to an Elastic Load Balancer with an Amazon EC2 Auto Scaling group, along with Amazon RDS Multi-AZ DB instances."
		]
	},
	{
		"question": "A company is migrating its applications to AWS. Currently, applications that run on premises generate hundreds of terabytes of data that is stored on a shared file system. The company is running an analytics application in the cloud that runs hourly to generate insights from this data. The company needs a solution to handle the ongoing data transfer between the on-premises shared file system and Amazon S3. The solution also must be able to handle occasional interruptions in internet connectivity. Which solution should the company use for the data transfer to meet these requirements?",
		"correctAnswersArray": [
			"AWS DataSync"
		],
		"wrongAnswersArray": [
			"AWS Transfer for SFTP",
			"AWS Migration Hub",
			"AWS Snowball Edge Storage Optimized"
		]
	},
	{
		"question": "A social media company is building a feature for its website. The feature will give users the ability to upload photos. The company expects significant increases in demand during large events and must ensure that the website can handle the upload traffic from users. Which solution meets these requirements with the MOST scalability?",
		"correctAnswersArray": [
			"Generate Amazon S3 presigned URLs in the application. Upload files directly from the user's browser into an S3 bucket."
		],
		"wrongAnswersArray": [
			"Provision an AWS Storage Gateway file gateway. Upload files directly from the user's browser to the file gateway.",
			"Provision an Amazon Elastic File System (Amazon EFS) file system. Upload files directly from the user's browser to the file system.",
			"Upload files from the user's browser to the application servers. Transfer the files to an Amazon S3 bucket."
		]
	},
	{
		"question": "A solutions architect is designing a high performance computing (HPC) workload on Amazon EC2. The EC2 instances need to communicate to each other frequently and require network performance with low latency and high throughput. Which EC2 configuration meets these requirements?",
		"correctAnswersArray": [
			"Launch the EC2 instances in a cluster placement group in one Availability Zone."
		],
		"wrongAnswersArray": [
			"Launch the EC2 instances in a spread placement group in one Availability Zone.",
			"Launch the EC2 instances in an Auto Scaling group in two Regions and peer the VPCs.",
			"Launch the EC2 instances in an Auto Scaling group spanning multiple Availability Zones"
		]
	},
	{
		"question": "An ecommerce company is running a multi-tier application on AWS. The front-end and backend tiers both run on Amazon EC2, and the database runs on Amazon RDS for MySQL. The backend tier communicates with the RDS instance. There are frequent calls to return identical datasets from the database that are causing performance slowdowns. Which action should be taken to improve the performance of the backend?",
		"correctAnswersArray": [
			"Implement Amazon ElastiCache to cache the large datasets."
		],
		"wrongAnswersArray": [
			"Implement Amazon Kinesis Data Firehose to stream the calls to the database.",
			"Implement an RDS for MySQL read replica to cache database calls.",
			"Implement Amazon SNS to store the database calls."
		]
	},
	{
		"question": "A solutions architect must migrate a Windows Internet Information Services (IIS) web application to AWS. The application currently relies on a file share hosted in the user's on-premises network-attached storage (NAS). The solutions architect has proposed migrating the IIS web servers to Amazon EC2 instances in multiple Availability Zones that are connected to the storage solution, and configuring an Elastic Load Balancer attached to the instances. Which replacement to the on-premises file share is MOST resilient and durable?",
		"correctAnswersArray": [
			"Migrate the file share to Amazon FSx for Windows File Server."
		],
		"wrongAnswersArray": [
			"Migrate the file share to Amazon Elastic File System (Amazon EFS).",
			"Migrate the file share to AWS Storage Gateway.",
			"Migrate the file share to Amazon RDS."
		]
	},
	{
		"question": "A company is testing an application that runs on an Amazon EC2 Linux instance. The instance contains a data volume of 500 GB that consists of a single Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) volume. The application is now ready for production use and will be installed on multiple EC2 instances that run in an Auto Scaling group. All instances need access to the data that was stored on the 500 GB volume. The company needs a highly available and fault-tolerant solution that does not introduce any significant changes to the application's code. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use an Amazon Elastic File System (Amazon EFS) file system that is configured with the General Purpose performance mode."
		],
		"wrongAnswersArray": [
			"Provision an EC2 instance with NFS server software that is configured with a single 500 GB gp2 volume.",
			"Migrate the data into an Amazon S3 bucket. Use an EC2 instance profile to access the contents of the bucket.",
			"Use an Amazon FSx for Windows File Server file system that is configured as an SMB file store within a single Availability Zone."
		]
	},
	{
		"question": "A company's website is used to sell products to the public. The site runs on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). There is also an Amazon CloudFront distribution, and AWS WAF is being used to protect against SQL injection attacks. The ALB is the origin for the CloudFront distribution. A recent review of security logs revealed an external malicious IP that needs to be blocked from accessing the website. What should a solutions architect do to protect the application?",
		"correctAnswersArray": [
			"Modify the configuration of AWS WAF to add an IP match condition to block the malicious IP address."
		],
		"wrongAnswersArray": [
			"Modify the network ACL for the EC2 instances in the target groups behind the ALB to deny the malicious IP address.",
			"Modify the network ACL on the CloudFront distribution to add a deny rule for the malicious IP address.",
			"Modify the security groups for the EC2 instances in the target groups behind the ALB to deny the malicious IP address."
		]
	},
	{
		"question": "A company runs a critical, customer-facing application on Amazon Elastic Kubernetes Service (Amazon EKS). The application has a microservices architecture. The company needs to implement a solution that collects, aggregates, and summarizes metrics and logs from the application in a centralized location. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Configure Amazon CloudWatch Container Insights in the existing EKS cluster. View the metrics and logs in the CloudWatch console."
		],
		"wrongAnswersArray": [
			"Run AWS App Mesh in the existing EKS cluster. View the metrics and logs in the App Mesh console.",
			"Run the Amazon CloudWatch agent in the existing EKS cluster. View the metrics and logs in the CloudWatch console.",
			"Configure AWS CloudTrail to capture data events. Query CloudTrail by using Amazon Elasticsearch Service (Amazon ES)."
		]
	},
	{
		"question": "A company has an on-premises data center that is running out of storage capacity. The company wants to migrate its storage infrastructure to AWS while minimizing bandwidth costs. The solution must allow for immediate retrieval of data at no additional cost. How can these requirements be met?",
		"correctAnswersArray": [
			"Deploy AWS Storage Gateway using cached volumes. Use Storage Gateway to store data in Amazon S3 while retaining copies of frequently accessed data subsets locally."
		],
		"wrongAnswersArray": [
			"Deploy AWS Direct Connect to connect with the on-premises data center. Configure AWS Storage Gateway to store data locally. Use Storage Gateway to asynchronously back up point-in-time snapshots of the data to Amazon S3.",
			"Deploy Amazon S3 Glacier Vault and enable expedited retrieval. Enable provisioned retrieval capacity for the workload.",
			"Deploy AWS Storage Gateway using stored volumes to store data locally. Use Storage Gateway to asynchronously back up point-in-time snapshots of the data to Amazon S3."
		]
	},
	{
		"question": "A solutions architect is designing a multi-Region disaster recovery solution for an application that will provide public API access The application will use Amazon EC2 instances with a userdata script to load application code and an Amazon RDS for MySQL database. The Recovery Time Objective (RTO) is 3 hours and the Recovery Point Objective (RPO) is 24 hours. Which architecture would meet these requirements at the LOWEST cost?",
		"correctAnswersArray": [
			"Use Amazon Route 53 for Region failover. Deploy new EC2 instances with the userdata script for APIs, and create a snapshot of the RDS instance daily for a backup. Replicate the snapshot to a backup Region."
		],
		"wrongAnswersArray": [
			"Use an Application Load Balancer for Region failover. Deploy new EC2 instances with the userdata script. Deploy separate RDS instances in each Region.",
			"Use Amazon API Gateway for the public APIs and Region failover. Deploy new EC2 instances with the userdata script. Create a MySQL read replica of the RDS instance in a backup Region.",
			"Use Amazon Route 53 for Region failover. Deploy new EC2 instances with the userdata script. Create a read replica of the RDS instance in a backup Region."
		]
	},
	{
		"question": "A company is hosting an election reporting website on AWS for users around the world. The website uses Amazon EC2 instances for the web and application tiers in an Auto Scaling group with Application Load Balancers. The database tier uses an Amazon RDS for MySQL database. The website is updated with election results once an hour and has historically observed hundreds of users accessing the reports. The company is expecting a significant increase in demand because of upcoming elections in different countries. A solutions architect must improve the website's ability to handle additional demand while minimizing the need for additional EC2 instances. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Launch an Amazon CloudFront web distribution to cache commonly requested website content."
		],
		"wrongAnswersArray": [
			"Deploy a reverse proxy into the design using an EC2 instance with caching enabled for commonly requested website content.",
			"Launch an Amazon ElastiCache cluster to cache common database queries.",
			"Enable disk-based caching on the EC2 instances to cache commonly requested website content"
		]
	},
	{
		"question": "A company is developing a serverless web application that gives users the ability to interact with real-time analytics from online games. The data from the games must be streamed in real time. The company needs a durable, low-latency database option for user data. The company does not know how many users will use the application. Any design considerations must provide response times of single-digit milliseconds as the application scales. Which combination of AWS services will meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"AWS Global Accelerator",
			"Amazon DynamoDB"
		],
		"wrongAnswersArray": [
			"Amazon CloudFront",
			"Amazon RDS",
			"Amazon Kinesis"
		]
	},
	{
		"question": "A company has an application that calls AWS Lambda functions. A recent code review found database credentials stored in the source code. The database credentials need to be removed from the Lambda source code. The credentials must then be securely stored and rotated on an ongoing basis to meet security policy requirements. What should a solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Store the password in AWS Secrets Manager. Associate the Lambda function with a role that can retrieve the password from Secrets Manager given its secret ID."
		],
		"wrongAnswersArray": [
			"Move the database password to an environment variable associated with the Lambda function. Retrieve the password from the environment variable upon execution.",
			"Store the password in AWS Key Management Service (AWS KMS). Associate the Lambda function with a role that can retrieve the password from AWS KMS given its key ID.",
			"Store the password in AWS CloudHSM. Associate the Lambda function with a role that can retrieve the password from CloudHSM given its key ID."
		]
	},
	{
		"question": "A company receives inconsistent service from its data center provider because the company is headquartered in an area affected by natural disasters. The company is not ready to fully migrate to the AWS Cloud, but it wants a failure environment on AWS in case the on-premises data center fails. The company runs web servers that connect to external vendors. The data available on AWS and on premises must be uniform. Which solution should a solutions architect recommend that has the LEAST amount of downtime?",
		"correctAnswersArray": [
			"Configure an Amazon Route 53 failover record. Run application servers on Amazon EC2 instances behind an Application Load Balancer in an Auto Scaling group. Set up AWS Storage Gateway with stored volumes to back up data to Amazon S3."
		],
		"wrongAnswersArray": [
			"Configure an Amazon Route 53 failover record. Execute an AWS CloudFormation template from a script to create Amazon EC2 instances behind an Application Load Balancer. Set up AWS Storage Gateway with stored volumes to back up data to Amazon S3.",
			"Configure an Amazon Route 53 failover record. Set up an AWS Direct Connect connection between a VPC and the data center. Run application servers on Amazon EC2 in an Auto Scaling group. Run an AWS Lambda function to execute an AWS template to create an Application Load Balancer.",
			"Configure an Amazon Route 53 failover record. Run an AWS Lambda function to execute an AWS CloudFormation template to launch two Amazon EC2 instances. Set up AWS Storage Gateway with stored volumes to back up data to Amazon S3. Set up an AWS Direct Connect connection between a VPC and the data center."
		]
	},
	{
		"question": "A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various storage options. The storage solution must be highly available and integrated with Active Directory for access control. Which solution will satisfy these requirements?",
		"correctAnswersArray": [
			"Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for authentication."
		],
		"wrongAnswersArray": [
			"Configure Amazon EFS storage and set the Active Directory domain for authentication.",
			"Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones.",
			"Create an Amazon S3 bucket and configure Microsoft Windows Server to mount it as a volume."
		]
	},
	{
		"question": "A company has a mobile chat application with a data store based in Amazon DynamoDB. Users would like new messages to be read with as little latency as possible. A solutions architect needs to design an optimal solution that requires minimal application changes. Which method should the solutions architect select?",
		"correctAnswersArray": [
			"Configure Amazon DynamoDB Accelerator (DAX) for the new messages table. Update the code to use the DAX endpoint."
		],
		"wrongAnswersArray": [
			"Double the number of read capacity units for the new messages table in DynamoDB. Continue to use the existing DynamoDB endpoint.",
			"Add an Amazon ElastiCache for Redis cache to the application stack. Update the application to point to the Redis cache endpoint instead of DynamoDB.",
			"Add DynamoDB read replicas to handle the increased read load. Update the application to point to the read endpoint for the read replicas."
		]
	},
	{
		"question": "An ecommerce company has noticed performance degradation of its Amazon RDS based web application. The performance degradation is attributed to an increase in the number of read-only SQL queries triggered by business analysts. A solutions architect needs to solve the problem with minimal changes to the existing web application. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Create a read replica of the primary database and have the business analysts run their queries."
		],
		"wrongAnswersArray": [
			"Export the data to Amazon DynamoDB and have the business analysts run their queries.",
			"Load the data into Amazon ElastiCache and have the business analysts run their queries",
			"Copy the data into an Amazon Redshift cluster and have the business analysts run their queries."
		]
	},
	{
		"question": "A company uses on-premises servers to host its applications. The company is running out of storage capacity. The applications use both block storage and NFS storage. The company needs a high-performing solution that supports local caching without re-architecting its existing applications. Which combination of actions should a solutions architect take to meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"Deploy an AWS Storage Gateway volume gateway to replace the block storage.",
			"Deploy an AWS Storage Gateway file gateway to replace NFS storage."
		],
		"wrongAnswersArray": [
			"Mount Amazon S3 as a file system to the on-premises servers.",
			"Deploy AWS Snowball Edge to provision NFS mounts to on-premises servers.",
			"Deploy Amazon Elastic File System (Amazon EFS) volumes and mount them to on-premises servers."
		]
	},
	{
		"question": "A company has established a new AWS account. The account is newly provisioned and no changes have been made to the default settings. The company is concerned about the security of the AWS account root user. What should be done to secure the root user?",
		"correctAnswersArray": [
			"Create IAM users for daily administrative tasks. Enable multi-factor authentication on the root user."
		],
		"wrongAnswersArray": [
			"Create IAM users for daily administrative tasks. Disable the root user.",
			"Generate an access key for the root user. Use the access key for daily administration tasks instead of the AWS Management Console.",
			"Provide the root user credentials to the most senior solutions architect. Have the solutions architect use the root user for daily administration tasks."
		]
	},
	{
		"question": "A company allows its developers to attach existing IAM policies to existing IAM roles to enable faster experimentation and agility. However, the security operations team is concerned that the developers could attach the existing administrator policy, which would allow the developers to circumvent any other security policies. How should a solutions architect address this issue?",
		"correctAnswersArray": [
			"Set an IAM permissions boundary on the developer IAM role that explicitly denies attaching the administrator policy."
		],
		"wrongAnswersArray": [
			"Create an Amazon SNS topic to send an alert every time a developer creates a new policy.",
			"Prevent the developers from attaching any policies and assign all IAM duties to the security operations team.",
			"Use service control policies to disable IAM activity across all accounts in the organizational unit."
		]
	},
	{
		"question": "A website runs a web application that receives a burst of traffic each day at noon. The users upload new pictures and content daily, but have been complaining of timeouts. The architecture uses Amazon EC2 Auto Scaling groups, and the custom application consistently takes 1 minute to initiate upon boot up before responding to user requests. How should a solutions architect redesign the architecture to better respond to changing traffic?",
		"correctAnswersArray": [
			"Configure Amazon CloudFront to use an Application Load Balancer as the origin."
		],
		"wrongAnswersArray": [
			"Configure an Auto Scaling step scaling policy with an instance warmup condition.",
			"Configure a Network Load Balancer with a slow start configuration.",
			"Configure AWS ElastiCache for Redis to offload direct requests to the servers."
		]
	},
	{
		"question": "A weather forecasting company needs to process hundreds of gigabytes of data with sub-millisecond latency. The company has a high performance computing (HPC) environment in its data center and wants to expand its forecasting capabilities. A solutions architect must identify a highly available cloud storage solution that can handle large amounts of sustained throughput. Files that are stored in the solution should be accessible to thousands of compute instances that will simultaneously access and process the entire dataset. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon FSx for Lustre persistent file systems."
		],
		"wrongAnswersArray": [
			"Use Amazon Elastic File System (Amazon EFS) with Provisioned Throughput mode.",
			"Use Amazon FSx for Lustre scratch file systems.",
			"Use Amazon Elastic File System (Amazon EFS) with Bursting Throughput mode."
		]
	},
	{
		"question": "A company wants to build an immutable infrastructure for its software applications. The company wants to test the software applications before sending traffic to them. The company seeks an efficient solution that limits the effects of application bugs. Which combination of steps should a solutions architect recommend? (Select TWO.)",
		"correctAnswersArray": [
			"Use AWS CloudFormation to deploy the staging environment with a snapshot deletion policy and reuse the resources in the production environment if the tests pass.",
			"Use AWS CloudFormation to update the production infrastructure and roll back the stack if the update fails."
		],
		"wrongAnswersArray": [
			"Apply Amazon Route 53 weighted routing to test the staging environment and gradually increase the traffic as the tests pass.",
			"Apply Amazon Route 53 failover routing to test the staging environment and fail over to the production environment if the tests pass.",
			"Use AWS CloudFormation with a parameter set to the staging value in a separate environment other than the production environment."
		]
	},
	{
		"question": "A company has recently updated its internal security standards. The company must now ensure all Amazon S3 buckets and Amazon Elastic Block Store (Amazon EBS) volumes are encrypted with keys created and periodically rotated by internal security specialists. The company is looking for a native, software-based AWS service to accomplish this goal. What should a solutions architect recommend as a solution?",
		"correctAnswersArray": [
			"Use AWS Key Management Service (AWS KMS) with customer master keys (CMKs) to store master key material and apply a routine to re-create a new key periodically and replace it in AWS KMS."
		],
		"wrongAnswersArray": [
			"Use an AWS CloudHSM cluster with customer master keys (CMKs) to store master key material and apply a routine to re-create a new key periodically and replace it in the CloudHSM cluster nodes.",
			"Use AWS Systems Manager Parameter Store with customer master keys (CMKs) to store master key material and apply a routine to re-create a new key periodically and replace it in the Parameter Store.",
			"Use AWS Secrets Manager with customer master keys (CMKs) to store master key material and apply a routine to create a new CMK periodically and replace it in AWS Secrets Manager."
		]
	},
	{
		"question": "A company is hosting 60 TB of production-level data in an Amazon S3 bucket. A solutions architect needs to bring that data on premises for quarterly audit requirements. This export of data must be encrypted while in transit. The company has low network bandwidth in place between AWS and its on-premises data center. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Deploy an AWS Snowball device in the on-premises data center after completing an export job request in the AWS Snowball console."
		],
		"wrongAnswersArray": [
			"Deploy Amazon Elastic File System (Amazon EFS), with lifecycle policies enabled, on AWS. Use it to transfer the data.",
			"Deploy an AWS Storage Gateway volume gateway on AWS. Enable a 90-day replication window to transfer the data.",
			"Deploy AWS Migration Hub with 90-day replication windows for data transfer."
		]
	},
	{
		"question": "A company plans to store sensitive user data on Amazon S3. Internal security compliance requirement mandate encryption of data before sending it to Amazon S3. What should a solutions architect recommend to satisfy these requirements?",
		"correctAnswersArray": [
			"Client-side encryption with a master key stored in AWS Key Management Service (AWS KMS)"
		],
		"wrongAnswersArray": [
			"Server-side encryption with keys stored in AWS Key Management Service (AWS KMS)",
			"Server-side encryption with customer-provided encryption keys",
			"Client-side encryption with Amazon S3 managed encryption keys"
		]
	},
	{
		"question": "A solutions architect is designing a new service behind Amazon API Gateway. The request patterns for the service will be unpredictable and can change suddenly from 0 requests to over 500 per second. The total size of the data that needs to be persisted in a backend database is currently less than 1 GB with unpredictable future growth. Data can be queried using simple key-value requests. Which combination of AWS services would meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"AWS Lambda",
			"Amazon DynamoDB"
		],
		"wrongAnswersArray": [
			"Amazon EC2 Auto Scaling",
			"AWS Fargate",
			"MySQL-compatible Amazon Aurora"
		]
	},
	{
		"question": "A company is migrating a NoSQL database cluster to Amazon EC2. The database automatically replicates data to maintain at least three copies of the data. I/O throughput of the servers is the highest priority. Which instance type should a solutions architect recommend for the migration?",
		"correctAnswersArray": [
			"Storage optimized instances with instance store"
		],
		"wrongAnswersArray": [
			"Memory optimized instances with Amazon Elastic Block Store (Amazon EBS) optimization enabled",
			"Burstable general purpose instances with an Amazon Elastic Block Store (Amazon EBS) volume",
			"Compute optimized instances with Amazon Elastic Block Store (Amazon EBS) optimization enabled"
		]
	},
	{
		"question": "Application developers have noticed that a production application is very slow when business reporting users run large production reports against the Amazon RDS instance backing the application. The CPU and memory utilization metrics for the RDS instance do not exceed 60% while the reporting queries are running. The business reporting users must be able to generate reports without affecting the application's performance. Which action will accomplish this?",
		"correctAnswersArray": [
			"Create a read replica and connect the business reports to it."
		],
		"wrongAnswersArray": [
			"Enable multiple Availability Zones on the RDS instance",
			"Create a read replica and connect the application to it.",
			"Increase the size of the RDS instance."
		]
	},
	{
		"question": "A company is automating an order management application. The company's development team has decided to use SFTP to transfer and store the business-critical information files. The files must be encrypted and must be highly available. The files also must be automatically deleted a month after they are created. Which solution meets these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Configure an Amazon S3 bucket with encryption enabled. Use AWS Transfer for SFTP to securely transfer the files to the S3 bucket. Apply S3 Lifecycle rules to automatically delete the files after a month."
		],
		"wrongAnswersArray": [
			"Install an SFTP service on an Amazon EC2 instance. Mount an Amazon Elastic File System (Amazon EFS) file share on the EC2 instance. Enable cron to delete the files after a month.",
			"Configure an Amazon S3 bucket with encryption enabled. Use AWS Transfer for SFTP to securely transfer the files to the S3 bucket. Apply an AWS Transfer for SFTP file retention policy to delete the files after a month.",
			"Configure an Amazon Elastic File System (Amazon EFS) file system with encryption enabled. Use AWS Transfer for SFTP to securely transfer the files to the EFS file system. Apply an EFS lifecycle policy to automatically delete the files after a month."
		]
	},
	{
		"question": "A company has multiple AWS accounts for various departments. One of the departments wants to share an Amazon S3 bucket with all other departments. Which solution will require the LEAST amount of effort?",
		"correctAnswersArray": [
			"Set the S3 bucket policy to allow cross-account access to other departments."
		],
		"wrongAnswersArray": [
			"Create a pre-signed URL for the bucket and share it with other departments.",
			"Enable cross-account S3 replication for the bucket.",
			"Create IAM users for each of the departments and configure a read-only IAM policy."
		]
	},
	{
		"question": "A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval. What should a solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in AmazonDynamoDB. Other applications can consume the transactions data off the Kinesis data stream."
		],
		"wrongAnswersArray": [
			"Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.",
			"Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.",
			"Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3."
		]
	},
	{
		"question": "A company hosts a website on premises and wants to migrate it to the AWS Cloud. The website exposes a single hostname to the internet but it routes its functions to different on-premises server groups based on the path of the URL. The server groups are scaled independently depending on the needs of the functions they support. The company has an AWS Direct Connect connection configured to its on-premises network. What should a solutions architect do to provide path-based routing to send the traffic to the correct group of servers?",
		"correctAnswersArray": [
			"Route all traffic to an Application Load Balancer (ALB). Configure path-based routing at the ALB to route traffic to the correct target group for the servers supporting that path."
		],
		"wrongAnswersArray": [
			"Route all traffic to a Network Load Balancer (NLB) with target groups for each group of servers. Use pattern matching rules at the NLB to route traffic to the correct target group.",
			"Use Amazon Route 53 as the DNS server. Configure Route 53 path-based alias records to route traffic to the correct Elastic Load Balancer for the group of servers supporting that path.",
			"Route all traffic to an internet gateway. Configure pattern matching rules at the internet gateway to route traffic to the group of servers supporting that path."
		]
	},
	{
		"question": "A company is preparing to deploy a data lake on AWS. A solutions architect must define the encryption strategy tor data at rest m Amazon S3/ The companyג€™s security policy states ✑ Keys must be rotated every 90 days. ✑ Strict separation of duties between key users and key administrators must be implemented. ✑ Auditing key usage must be possible. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Server-side encryption with AWS KMS managed keys (SSE-KMS) with customer managed customer master keys (CMKs)"
		],
		"wrongAnswersArray": [
			"Server-side encryption with AWS KMS managed keys (SSE-KMS) with AWS managed customer master keys (CMKs)",
			"Server-side encryption with Amazon S3 managed keys (SSE-S3) with AWS managed customer master keys (CMKs)",
			"Server-side encryption with Amazon S3 managed keys (SSE-S3) with customer managed customer master keys (CMKs)"
		]
	},
	{
		"question": "An application uses an Amazon RDS MySQL DB instance. The RDS database is becoming low on disk space. A solutions architect wants to increase the disk space without downtime. Which solution meets these requirements with the LEAST amount of effort?",
		"correctAnswersArray": [
			"Enable storage auto scaling in RDS."
		],
		"wrongAnswersArray": [
			"Increase the RDS database instance size.",
			"Change the RDS database instance storage type to Provisioned IOPS.",
			"Back up the RDS database, increase the storage capacity, restore the database and stop the previous instance."
		]
	},
	{
		"question": "A company has 700 TB of backup data stored in network attached storage (NAS) in its data center This backup data need to be accessible for infrequent regulatory requests and must be retained 7 years. The company has decided to migrate this backup data from its data center to AWS. The migration must be complete within 1 month. The company has 500 Mbps of dedicated bandwidth on its public internet connection available for data transfer. What should a solutions architect do to migrate and store the data at the LOWEST cost?",
		"correctAnswersArray": [
			"Order AWS Snowball devices to transfer the data. Use a lifecycle policy to transition the files to Amazon S3 Glacier Deep Archive."
		],
		"wrongAnswersArray": [
			"Deploy a VPN connection between the data center and Amazon VPC. Use the AWS CLI to copy the data from on premises to Amazon S3 Glacier.",
			"Provision a 500 Mbps AWS Direct Connect connection and transfer the data to Amazon S3. Use a lifecycle policy to transition the files to Amazon S3 Glacier Deep Archive.",
			"Use AWS DataSync to transfer the data and deploy a DataSync agent on premises. Use the DataSync task to copy files from the on-premises NAS storage to Amazon S3 Glacier."
		]
	},
	{
		"question": "A company has applications hosted on Amazon EC2 instances with IPv6 addresses. The applications must initiate communications with other external applications using the internet. However, the companyג€™'s security policy states that any external service cannot initiate a connection to the EC2 instances. What should a solutions architect recommend to resolve this issue?",
		"correctAnswersArray": [
			"Create an egress-only internet gateway and make it the destination of the subnetג€™s route table."
		],
		"wrongAnswersArray": [
			"Create an internet gateway and make it the destination of the subnetג€™s route table.",
			"Create a virtual private gateway and make it the destination of the subnetג€™s route table.",
			"Create a NAT gateway and make it the destination of the subnetג€™s route table."
		]
	},
	{
		"question": "A company has no existing file share services. A new project requires access to file storage that is mountable as a drive for on-premises desktops. The file server must authenticate users to an Active Directory domain before they are able to access the storage. Which service will allow Active Directory users to mount storage as a drive on their desktops?",
		"correctAnswersArray": [
			"AWS Storage Gateway"
		],
		"wrongAnswersArray": [
			"AWS DataSync",
			"AWS Snowball Edge",
			"Amazon S3 Glacier"
		]
	},
	{
		"question": "A company is running an online transaction processing (OLTP) workload on AWS. This workload uses an unencrypted Amazon RDS DB instance in a Multi-AZ deployment. Daily database snapshots are taken from this instance. What should a solutions architect do to ensure the database and snapshots are always encrypted moving forward?",
		"correctAnswersArray": [
			"Encrypt a copy of the latest DB snapshot. Replace existing DB instance by restoring the encrypted snapshot."
		],
		"wrongAnswersArray": [
			"Copy the snapshots and enable encryption using AWS Key Management Service (AWS KMS). Restore encrypted snapshot to an existing DB instance.",
			"Create a new encrypted Amazon Elastic Block Store (Amazon EBS) volume and copy the snapshots to it. Enable encryption on the DB instance.",
			"Copy the snapshots to an Amazon S3 bucket that is encrypted using server-side encryption with AWS Key Management Service (AWS KMS) managed keys (SSE-KMS)."
		]
	},
	{
		"question": "A company is running a multi-tier web application on AWS. The application runs its database tier on Amazon Aurora MySQL. The application and database tiers are in the us-east-1 Region. A database administrator who regularly monitors the Aurora DB cluster finds that an intermittent increase in read traffic is creating high CPUutilization on the read replica and causing increased read latency of the application. What should a solutions architect do to improve read scalability?",
		"correctAnswersArray": [
			"Configure Aurora Auto Scaling for the read replica."
		],
		"wrongAnswersArray": [
			"Increase the instance class of the read replica.",
			"Create a cross-Region read replica",
			"Reboot the Aurora DB cluster."
		]
	},
	{
		"question": "A companys order fulfillment service uses a MySQL database. The database needs to support a large number of concurrent queries and transactions. Developers are spending time patching and tuning the database This is causing delays in releasing new product features. The company wants to use cloud-based services to help address this new challenge. The solution must allow the developers to migrate the database with little or no code changes and must optimize performance. Which service should a solutions architect use to meet these requirements?",
		"correctAnswersArray": [
			"Amazon Aurora"
		],
		"wrongAnswersArray": [
			"Amazon ElastiCache",
			"Amazon DynamoDB",
			"MySQL on Amazon EC2"
		]
	},
	{
		"question": "20) A company has an API-based inventory reporting application running on Amazon EC2 instances. The application stores information in an Amazon DynamoDB table. The companyג€™s distribution centers have an on-premises shipping application that calls an API to update the inventory before printing shipping labels. The company has been experiencing application interruptions several times each day, resulting in lost transactions. What should a solutions architect recommend to improve application resiliency?",
		"correctAnswersArray": [
			"Modify the application to send inventory updates using Amazon Simple Queue Service (Amazon SQS)."
		],
		"wrongAnswersArray": [
			"Modify the shipping application to write to a local database.",
			"Configure Amazon API Gateway to call the EC2 inventory application APIs.",
			"Modify the application APIs to run serverless using AWS Lambda"
		]
	},
	{
		"question": "A company hosts its web application on AWS using seven Amazon EC2 instances. The company requires that the IP addresses of all healthy EC2 instances be returned in response to DNS queries. Which policy should be used to meet this requirement?",
		"correctAnswersArray": [
			"Multi-value routing policy"
		],
		"wrongAnswersArray": [
			"Geolocation routing policy",
			"Simple routing policy",
			"Latency routing policy"
		]
	},
	{
		"question": "A company is developing a new machine learning model solution in AWS. The models are developed as independent microservices that fetch about 1 GB of model data from Amazon S3 at startup and load the data into memory. Users access the models through an asynchronous API. Users can send a request or a batch of requests and specify where the results should be sent. The company provides models to hundreds of users. The usage patterns for the models are irregular Some models could be unused for days or weeks. Other models could receive batches of thousands of requests at a time. Which solution meets these requirements?",
		"correctAnswersArray": [
			"The requests from the API are sent to the models Amazon Simple Queue Service (Amazon SQS) queue. Models are deployed as Amazon Elastic Container Service (Amazon ECS) services reading from the queue AWS Auto Scaling is enabled on Amazon ECS for both the cluster and copies of the service based on the queue size."
		],
		"wrongAnswersArray": [
			"The requests from the API are sent to the models Amazon Simple Queue Service (Amazon SQS) queue. Models are deployed as AWS Lambda functions triggered by SQS events AWS Auto Scaling is enabled on Lambda to increase the number of vCPUs based on the SQS queue size.",
			"The requests from the API are sent to the modelג€™s Amazon Simple Queue Service (Amazon SQS) queue. Models are deployed as Amazon Elastic Container Service (Amazon ECS) services reading from the queue AWS App Mesh scales the instances of the ECS cluster based on the SQS queue size.",
			"The requests from the API are sent to an Application Load Balancer (ALB). Models are deployed as AWS Lambda functions invoked by the ALB."
		]
	},
	{
		"question": "A company has a website deployed on AWS. The database backend is hosted on Amazon RDS for MySQL with a primary instance and five read replicas to support scaling needs. The read replicas should lag no more than 1 second behind the primary instance to support the user experience. As traffic on the website continues to increase, the replicas are falling further behind during periods of peak load, resulting in complaints from users when searches yield inconsistent results. A solutions architect needs to reduce the replication lag as much as possible, with minimal changes to the application code or operational requirements. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Migrate the database to Amazon Aurora MySQL. Replace the MySQL read replicas with Aurora Replicas and enable Aurora Auto Scaling"
		],
		"wrongAnswersArray": [
			"Migrate the database from Amazon RDS to MySQL running on Amazon EC2 compute instances. Choose very large compute optimized instances for all replica nodes.",
			"Deploy an Amazon ElastiCache for Redis cluster in front of the database. Modify the website to check the cache before querying the database read endpoints.",
			"Migrate the database to Amazon DynamoDB. Initially provision a large number of read capacity units (RCUs) to support the required throughput with on- demand capacity scaling enabled."
		]
	},
	{
		"question": "A company has a custom application with embedded credentials that retrieves information from an Amazon RDS MySQL DB instance. Management says the application must be made more secure with the least amount of programming effort. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Set up a credentials rotation schedule for the application user in the RDS for MySQL database using Secrets Manager."
		],
		"wrongAnswersArray": [
			"Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Create an AWS Lambda function that rotates the credentials in Secret Manager.",
			"Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Systems Manager Parameter Store. Configure the application to load the database credentials from Parameter Store. Set up a credentials rotation schedule for the application user in the RDS for MySQL database using Parameter Store.",
			"Use AWS Key Management Service (AWS KMS) customer master keys (CMKs) to create keys. Configure the application to load the database credentials from AWS KMS. Enable automatic key rotation."
		]
	},
	{
		"question": "A company has an application that runs on Amazon EC2 instances within a private subnet in a VPC. The instances access data in an Amazon S3 bucket in the same AWS Region. The VPC contains a NAT gateway in a public subnet to access the S3 bucket. The company wants to reduce costs by replacing the NAT gateway without compromising security or redundancy. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Replace the NAT gateway with a gateway VPC endpoint."
		],
		"wrongAnswersArray": [
			"Replace the NAT gateway with a NAT instance.",
			"Replace the NAT gateway with an internet gateway.",
			"Replace the NAT gateway with an AWS Direct Connect connection."
		]
	},
	{
		"question": "A company is selling up an application to use an Amazon RDS MySQL DB instance. The database must be architected for high availability across Availability Zones and AWS Regions with minimal downtime. How should a solutions architect meet this requirement?",
		"correctAnswersArray": [
			"Set up an RDS MySQL Multi-AZ DB instance. Configure a read replica in a different Region."
		],
		"wrongAnswersArray": [
			"Set up an RDS MySQL Multi-AZ DB instance. Configure an appropriate backup window.",
			"Set up an RDS MySQL Single-AZ DB instance. Copy automated snapshots to at least one other Region.",
			"Set up an RDS MySQL Single-AZ DB instance. Configure a read replica in a different Region."
		]
	},
	{
		"question": "A mobile gaming company runs application servers on Amazon EC2 instances. The servers receive updates from players every 15 minutes. The mobile game creates a JSON object of the progress made in the game since the last update, and sends the JSON object to an Application Load Balancer. As the mobile game is played, game updates are being lost. The company wants to create a durable way to get the updates in older. What should a solutions architect recommend to decouple the system?",
		"correctAnswersArray": [
			"Use Amazon Simple Queue Service (Amazon SQS) FIFO queues to capture the data and EC2 instances to process the messages in the queue."
		],
		"wrongAnswersArray": [
			"Use Amazon Simple Notification Service (Amazon SNS) to capture the data and EC2 instances to process the messages sent to the Application Load Balancer.",
			"Use Amazon Kinesis Data Streams to capture the data and store the JSON object in Amazon S3.",
			"Use Amazon Kinesis Data Firehose to capture the data and store the JSON object in Amazon S3."
		]
	},
	{
		"question": "A company is developing a video conversion application hosted on AWS. The application will be available in two tiers a free tier and a paid tier. Users in the paid tier will have their videos converted first and then the tree tier users will have their videos converted. Which solution meets these requirements and is MOST cost-effective?",
		"correctAnswersArray": [
			"Two standard Amazon Simple Queue Service (Amazon SQS) queues with one for the paid tier and one for the free tier."
		],
		"wrongAnswersArray": [
			"A single standard Amazon Simple Queue Service (Amazon SQS) queue for all file types.",
			"A single FIFO Amazon Simple Queue Service (Amazon SQS) queue for all file types.",
			"One FIFO queue for the paid tier and one standard queue for the free tier."
		]
	},
	{
		"question": "A web application must persist order data to Amazon S3 to support neat-real time processing. A solutions architect needs create an architecture that is both scalable and fault tolerant. Which solutions meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Write the order event to an Amazon DynamoDB table. Use DynamoDB Streams to trigger an AWS Lambda function that parses the payload and writes the data to Amazon S3.",
			"Write the order event to an Amazon Simple Queue Service (Amazon SQS) queue. Use the queue to trigger an AWSLambda function that parsers the payload and writes the data to Amazon S3."
		],
		"wrongAnswersArray": [
			"Write the order event to an Amazon Simple Notification Service (Amazon SNS) topic. Use the SNS topic to trigger an AWS Lambda function that parses the payload and writes the data to Amazon S3.",
			"Write the order event to an Amazon Simple Queue Service (Amazon SQS) queue. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an AWS Lambda function that parses the payload and writes the data to Amazon S3.",
			"Write the order event to an Amazon Simple Notification Service (Amazon SNS) topic. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an AWS Lambda function that parses the payload andwrites the data to Amazon S3."
		]
	},
	{
		"question": "A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third party service is used for the DNS. The companyג€™s solutions architect must recommend a solution to detect and protect against largescale DDoS attacks. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Enable AWS Shield Advanced and assign the ELB to it."
		],
		"wrongAnswersArray": [
			"Enable AWS Shield and assign Amazon Route 53 to it.",
			"Enable Amazon Inspector on the EC2 instances.",
			"Enable Amazon GuardDuty on the account."
		]
	},
	{
		"question": "A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL certificate, which is on each instance to perform SSL termination. There has been an increase in traffic recently, and the operations team determined that SSL encryption and decryption is causing the compute capacity of the web servers to reach their maximum limit. What should a solutions architect do to increase the applicationג€™s performance?",
		"correctAnswersArray": [
			"Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the SSL certificate from ACM."
		],
		"wrongAnswersArray": [
			"Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and configure it to direct connections to the existing EC2 instances.",
			"Create a new SSL certificate using AWS Certificate Manager (ACM). Install the ACM certificate on each instance.",
			"Create an Amazon S3 bucket. Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to reference the bucket for SSL termination."
		]
	},
	{
		"question": "A company is running an online transaction processing (OLTP) workload on AWS. This workload uses an unencrypted Amazon RDS DB instance in a Multi-AZ deployment. Daily database snapshots are taken from this instance. What should a solutions architect do to ensure the database and snapshots are always encrypted moving forward?",
		"correctAnswersArray": [
			"Encrypt a copy of the latest DB snapshot. Replace existing DB instance by restoring the encrypted snapshot."
		],
		"wrongAnswersArray": [
			"Copy the snapshots to an Amazon S3 bucket that is encrypted using server-side encryption with AWS Key Management Service (AWS KMS) managed keys (SSE-KMS).",
			"Create a new encrypted Amazon Elastic Block Store (Amazon EBS) volume and copy the snapshots to it. Enable encryption on the DB instance.",
			"Copy the snapshots and enable encryption using AWS Key Management Service (AWS KMS). Restore encrypted snapshot to an existing DB instance."
		]
	},
	{
		"question": "An ecommerce website is deploying its web application as Amazon Elastic Container Service (Amazon ECS) container instances behind an Application Load Balancer (ALB). During periods of high activity, the website slows down and availability is reduced. A solutions architect uses Amazon CloudWatch alarms to receive notifications whenever there is an availability issue so they can scale out resources. Company management wants a solution that automatically responds to such events. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Set up AWS Auto Scaling to scale out the ECS service when the ALB target group CPU utilization is too high. Set up AWS Auto Scaling to scale out the ECS cluster when the CPU or memory reservation is too high."
		],
		"wrongAnswersArray": [
			"Set up AWS Auto Scaling to scale out the ECS service when there are timeouts on the ALB. Set up AWS Auto Scaling to scale out the ECS cluster when the CPU or memory reservation is too high.",
			"Set up AWS Auto Scaling to scale out the ECS service when the serviceג€™s CPU utilization is too high. Set up AWS Auto Scaling to scale out the ECS cluster when the CPU or memory reservation is too high.",
			"Set up AWS Auto Scaling to scale out the ECS service when the ALB CPU utilization is too high. Setup AWS Auto Scaling to scale out the ECS cluster when the CPU or memory reservation is too high."
		]
	},
	{
		"question": "A company has a three-tier environment on AWS that ingests sensor data from its usersג€™ devices. The traffic flows through a Network Load Balancer (NLB) then to Amazon EC2 instances for the web tier, and finally to EC2 instances for the application tier that makes database calls. What should a solutions architect do to improve the security of data in transit to the web tier?",
		"correctAnswersArray": [
			"Configure a TLS listener and add the server certificate on the NLB."
		],
		"wrongAnswersArray": [
			"Encrypt the Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instances using AWS Key Management Service (AWS KMS).",
			"Configure AWS Shield Advanced and enable AWS WAF on the NLB.",
			"Change the load balancer to an Application Load Balancer and attach AWS WAF to it."
		]
	},
	{
		"question": "A company is planning to transfer multiple terabytes of data to AWS. The data is collected offline from ships. The company want to run complex transformation before transferring the data. Which AWS service should a solutions architect recommend for this migration?",
		"correctAnswersArray": [
			"AWS Snowball Edge Compute Optimize"
		],
		"wrongAnswersArray": [
			"AWS Snowmobile",
			"AWS Snowball Edge Storage Optimize",
			"AWS Snowball"
		]
	},
	{
		"question": "A company has an application that generates a large number of files, each approximately 5 MB in size. The files are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted. Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce. The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days. Which storage solution is MOST cost-effective?",
		"correctAnswersArray": [
			"Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Delete the files 4 years after object creation."
		],
		"wrongAnswersArray": [
			"Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation.",
			"Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation.",
			"Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object creation. Delete the files 4 years after object creation."
		]
	},
	{
		"question": "An administrator of a large company wants to monitor for and prevent any cryptocurrency-related attacks on the companyג€™s AWS accounts. Which AWS service can the administrator use to protect the company against attacks?",
		"correctAnswersArray": [
			"Amazon GuardDuty"
		],
		"wrongAnswersArray": [
			"Amazon Macie",
			"Amazon Inspector",
			"Amazon Cognito"
		]
	},
	{
		"question": "A company previously migrated its data warehouse solution to AWS. The company also has an AWS Direct Connect connection. Corporate office users query the data warehouse using a visualization tool. The average size of a query returned by the data warehouse is 50 MB and each webpage sent by the visualization tool is approximately 500 KB. Result sets returned by the data warehouse are not cached. Which solution provides the LOWEST data transfer egress cost for the company?",
		"correctAnswersArray": [
			"Host the visualization tool in the same AWS Region as the data warehouse and access it over a DirectConnect connection at a location in the same Region."
		],
		"wrongAnswersArray": [
			"Host the visualization tool in the same AWS Region as the data warehouse. Access it over the internet.",
			"Host the visualization tool on premises and query the data warehouse directly over a Direct Connect connection at a location in the same AWS Region.",
			"Host the visualization tool on premises and query the data warehouse directly over the internet."
		]
	},
	{
		"question": "A company has an application hosted on Amazon EC2 instances in two VPCs across different AWS Regions. To communicate with each other, the instances use the internet for connectivity. The security team wants to ensure that no communication between the instances happens over the internet. What should a solutions architect do to accomplish this?",
		"correctAnswersArray": [
			"Create a VPC peering connection and update the route table of the EC2 instancesג€™ subnet"
		],
		"wrongAnswersArray": [
			"Create a VPN connection and update the route table of the EC2 instancesג€™ subnet.",
			"Create a NAT gateway and update the route table of the EC2 instancesג€™ subnet.",
			"Create a VPC endpoint and update the route table of the EC2 instancesג€™ subnet."
		]
	},
	{
		"question": "A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the ability to test new site features frequently. The company also needs a highly available and managed solution that requires minimum operational overhead. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between multiple Elastic Beanstalk environments for feature testing."
		],
		"wrongAnswersArray": [
			"Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the S3 bucket. Use AWS Lambda to process all dynamic content.",
			"Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load Balancer Controller to dynamically route traffic between containers that contain the new site features for testing.",
			"Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto Scaling groups and an Application Load Balancer to manage the website's availability."
		]
	},
	{
		"question": "A company has an on-premises data center that is running out of storage capacity. The company wants to migrate its storage infrastructure to AWS while minimizing bandwidth costs. The solution must allow for immediate retrieval of data at no additional cost. How can these requirements be met?",
		"correctAnswersArray": [
			"Deploy AWS Storage Gateway using cached volumes. Use Storage Gateway to store data in Amazon S3 while retaining copies of frequently accessed data subsets locally."
		],
		"wrongAnswersArray": [
			"Deploy AWS Storage Gateway using stored volumes to store data locally. Use Storage Gateway to asynchronously back up point-in-time snapshots of the data to Amazon S3.",
			"Deploy AWS Direct Connect to connect with the on-premises data center. Configure AWS Storage Gateway to store data locally. Use Storage Gateway to asynchronously back up point-in-time snapshots of the data to Amazon S3.",
			"Deploy Amazon S3 Glacier Vault and enable expedited retrieval. Enable provisioned retrieval capacity for the workload."
		]
	},
	{
		"question": "A company's application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. On the first day of every month at midnight, the application becomes much slower when the month-end financial calculation batch runs. This causes the CPU utilization of the EC2 instances to immediately peak to 100%, which disrupts the application. What should a solutions architect recommend to ensure the application is able to handle the workload and avoid downtime?",
		"correctAnswersArray": [
			"Configure an EC2 Auto Scaling scheduled scaling policy based on the monthly schedule."
		],
		"wrongAnswersArray": [
			"Configure an EC2 Auto Scaling simple scaling policy based on CPU utilization.",
			"Configure Amazon ElastiCache to remove some of the workload from the EC2 instances.",
			"Configure an Amazon CloudFront distribution in front of the ALB."
		]
	},
	{
		"question": "A company stores critical data in Amazon DynamoDB tables in the company's AWS account. An IT administrator accidentally deleted a DynamoDB table. The deletion caused a significant loss of data and disrupted the company's operations. The company wants to prevent this type of disruption in the future. Which solution will meet this requirement with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Configure deletion protection on the DynamoDB tables."
		],
		"wrongAnswersArray": [
			"Create a backup and restore plan for the DynamoDB tables. Recover the DynamoDB tables manually.",
			"Enable point-in-time recovery on the DynamoDB tables.",
			"Configure a trail in AWS CloudTrail. Create an Amazon EventBridge rule for delete actions. Create an AWS Lambda function to automatically restore deleted DynamoDB tables."
		]
	},
	{
		"question": "A company runs a container application on a Kubernetes cluster in the company's data center. The application uses Advanced Message Queuing Protocol (AMQP) to communicate with a message queue. The data center cannot scale fast enough to meet the company's expanding business needs. The company wants to migrate the workloads to AWS. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Migrate the container application to Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon MQ to retrieve the messages."
		],
		"wrongAnswersArray": [
			"Use highly available Amazon EC2 instances to run the application. Use Amazon MQ to retrieve the messages.",
			"Migrate the container application to Amazon Elastic Container Service (Amazon ECS). Use Amazon Simple Queue Service (Amazon SQS) to retrieve the messages.",
			"Use AWS Lambda functions to run the application. Use Amazon Simple Queue Service (Amazon SQS) to retrieve the messages."
		]
	},
	{
		"question": "A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server."
		],
		"wrongAnswersArray": [
			"Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.",
			"Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS.",
			"Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances."
		]
	},
	{
		"question": "A company is using Amazon CloudFront with its website. The company has enabled logging on the CloudFront distribution, and logs are saved in one of the company's Amazon S3 buckets. The company needs to perform advanced analyses on the logs and build visualizations. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the results with Amazon QuickSight."
		],
		"wrongAnswersArray": [
			"Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize the results with AWS Glue.",
			"Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the results with AWS Glue.",
			"Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize the results with Amazon QuickSight."
		]
	},
	{
		"question": "A manufacturing company runs its report generation application on AWS. The application generates each report in about 20 minutes. The application is built as a monolith that runs on a single Amazon EC2 instance. The application requires frequent updates to its tightly coupled modules. The application becomes complex to maintain as the company adds new features. Each time the company patches a software module, the application experiences downtime. Report generation must restart from the beginning after any interruptions. The company wants to redesign the application so that the application can be flexible, scalable, and gradually improved. The company wants to minimize application downtime. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Run the application on Amazon Elastic Container Service (Amazon ECS) as microservices with service auto scaling."
		],
		"wrongAnswersArray": [
			"Run the application on Amazon EC2 Spot Instances as microservices with a Spot Fleet default allocation strategy.",
			"Run the application on AWS Lambda as a single function with maximum provisioned concurrency.",
			"Run the application on AWS Elastic Beanstalk as a single application environment with an all-at-once deployment strategy."
		]
	},
	{
		"question": "A company has deployed an application in an AWS account. The application consists of microservices that run on AWS Lambda and Amazon Elastic Kubernetes Service (Amazon EKS). A separate team supports each microservice. The company has multiple AWS accounts and wants to give each team its own account for its microservices. A solutions architect needs to design a solution that will provide service-to-service communication over HTTPS (port 443). The solution also must provide a service registry for service discovery. Which solution will meet these requirements with the LEAST administrative overhead?",
		"correctAnswersArray": [
			"Create a VPC Lattice service network. Associate the microservices with the service network. Define HTTPS listeners for each service. Register microservice compute resources as targets. Identify VPCs that need to communicate with the services. Associate those VPCs with the service network."
		],
		"wrongAnswersArray": [
			"Create peering connections between VPCs that contain microservices. Create a prefix list for each service that requires a connection to a client. Create route tables to route traffic to the appropriate VPC. Create security groups to allow only HTTPS communication.",
			"Create an inspection VPC. Deploy an AWS Network Firewall firewall to the inspection VPC. Attach the inspection VPC to a new transit gateway. Route VPC-to-VPC traffic to the inspection VPC. Apply firewall rules to allow only HTTPS communication.",
			"Create a Network Load Balancer (NLB) with an HTTPS listener and target groups for each microservice. Create an AWS PrivateLink endpoint service for each microservice. Create an interface VPC endpoint in each VPC that needs to consume that microservice."
		]
	},
	{
		"question": "A company designed a stateless two-tier application that uses Amazon EC2 in a single Availability Zone and an Amazon RDS Multi-AZ DB instance. New company management wants to ensure the application is highly available. What should a solutions architect do to meet this requirement?",
		"correctAnswersArray": [
			"Configure the application to use Multi-AZ EC2 Auto Scaling and create an Application Load Balancer."
		],
		"wrongAnswersArray": [
			"Configure the application to use Amazon Route 53 latency-based routing to feed requests to the application.",
			"Configure Amazon Route 53 rules to handle incoming requests and create a Multi-AZ Application Load Balancer.",
			"Configure the application to take snapshots of the EC2 instances and send them to a different AWS Region."
		]
	},
	{
		"question": "A manufacturing company has machine sensors that upload .csv files to an Amazon S3 bucket. These .csv files must be converted into images and must be made available as soon as possible for the automatic generation of graphical reports. The images become irrelevant after 1 month, but the cv files must be kept to train machine learning (ML) models twice a year. The ML trainings and audits are planned weeks in advance. Which combination of steps will meet these requirements MOST cost-effectively? (Select TWO.)",
		"correctAnswersArray": [
			"Create S3 Lifecycle rules for csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 Glacier 1 day after they are uploaded. Expire the image files after 30 days.",
			"Design an AWS Lambda function that converts the cv files into images and stores the images in the S3 bucket. Invoke the Lambda function when a csv file is uploaded."
		],
		"wrongAnswersArray": [
			"Create S3 Lifecycle rules for csv files and image files in the S3 bucket. Transition the csv files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 1 day after they are uploaded. Expire the image files after 30 days.",
			"Launch an Amazon EC2 Spot Instance that downloads the .cv files every hour, generates the image files, and uploads the images to the S3 bucket.",
			"Create S3 Lifecycle rules for csv files and image files in the S3 bucket. Transition the csv files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 1 day after they are uploaded. Keep the image files in Reduced Redundancy Storage (RRS)."
		]
	},
	{
		"question": "A company is designing the architecture for a new mobile app that uses the AWS Cloud. The company uses organizational units (OUs) in AWS Organizations to manage its accounts. The company wants to tag Amazon EC2 instances with data sensitivity by using values of sensitive and nonsensitive. IAM identities must not be able to delete a tag or create instances without a tag. Which combination of steps will meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"In Organizations, create a new service control policy (SCP) that specifies the data sensitivity tag key and the required tag values. Enforce the tag values for the EC2 instances. Attach the SCP to the appropriate OU.",
			"Create a service control policy (SCP) to deny creating instances when a tag key is not specified. Create another SCP that prevents identities from deleting tags. Attach the SCPs to the appropriate OU."
		],
		"wrongAnswersArray": [
			"Create an AWS Config rule to check if EC2 instances use the data sensitivity tag and the specified values. Configure an AWS Lambda function to delete the resource if a noncompliant resource is found.",
			"Create a tag policy to deny running instances when a tag key is not specified. Create another tag policy that prevents identities from deleting tags. Attach the tag policies to the appropriate OU.",
			"In Organizations, create a new tag policy that specifies the data sensitivity tag key and the required values. Enforce the tag values for the EC2 instances. Attach the tag policy to the appropriate OU."
		]
	},
	{
		"question": "A city has deployed a web application running on Amazon EC2 instances behind an Application Load Balancer (ALB). The application's users have reported sporadic performance, which appears to be related to DoS attacks originating from random IP addresses. The city needs a solution that requires minimal configuration changes and provides an audit trail for the DDoS sources. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Subscribe to AWS Shield Advanced. Engage the AWS DDoS Response Team (DRT) to integrate mitigating controls into the service."
		],
		"wrongAnswersArray": [
			"Subscribe to Amazon Inspector. Engage the AWS DDoS Response Team (DRT) to integrate mitigating controls into the service.",
			"Create an Amazon CloudFront distribution for the application, and set the ALB as the origin. Enable an AWS WAF web ACL on the distribution, and configure rules to block traffic from unknown sources.",
			"Enable an AWS WAF web ACL on the ALB, and configure rules to block traffic from unknown sources."
		]
	},
	{
		"question": "A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning. Which combination of steps should a solutions architect take to meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.",
			"Create an Amazon EventBridge scheduled event that invokes an AWS Glue job to query the application's API for the data"
		],
		"wrongAnswersArray": [
			"Configure the application to send the data to Amazon Kinesis Data Firehose.",
			"Create an Amazon EventBridge scheduled event that invokes an AWS Lambda function to query the application's API for the data.",
			"Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email."
		]
	},
	{
		"question": "A solutions architect must provide an automated solution for a company's compliance policy that states security groups cannot include a rule that allows SSH from 0.0.0.0/0. The company needs to be notified if there is any breach in the policy. A solution is needed as soon as possible. What should the solutions architect do to meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Enable the restricted-ssh AWS Config managed rule and generate an Amazon Simple Notification Service (Amazon SNS) notification when a noncompliant rule is created."
		],
		"wrongAnswersArray": [
			"Create an IAM role with permissions to globally open security groups and network ALs. Create an Amazon Simple Notification Service (Amazon SNS) topic to generate a notification every time the role is assumed by a user.",
			"Write an AWS Lambda script that monitors security groups for SSH being open to 0.0.0.0/0 addresses and creates a notification every time it finds one.",
			"Configure a service control policy (SCP) that prevents non-administrative users from creating or editing security groups. Create a notification in the ticketing system when a user requests a rule that needs administrator permissions."
		]
	},
	{
		"question": "A company collects data from a large number of participants who use wearable devices. The company stores the data in an Amazon DynamoDB table and uses applications to analyze the data. The data workload is constant and predictable. The company wants to stay at or below its forecasted budget for DynamoDB. Which solution will meet these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Use provisioned mode. Specify the read capacity units (RCUs) and write capacity units (WCUs)."
		],
		"wrongAnswersArray": [
			"Use on-demand mode. Specify the read capacity units (RCUs) and write capacity units (WCUs) with reserved capacity.",
			"Use provisioned mode and DynamoDB Standard-Infrequent Access (DynamoDB Standard-IA). Reserve capacity for the forecasted workload.",
			"Use on-demand mode. Set the read capacity units (RCUs) and write capacity units (WCUs) high enough to accommodate changes in the workload."
		]
	},
	{
		"question": "A company wants to securely exchange data between its software as a service (SaaS) application Salesforce account and Amazon S3. The company must encrypt the data at rest by using AWS Key Management Service (AWS KMS) customer managed keys. The company must also encrypt the data in transit. The company has enabled API access for the Salesforce account. Which solution will meet these requirements with the LEAST development effort?",
		"correctAnswersArray": [
			"Create Amazon AppFlow flows to transfer the data securely from Salesforce to Amazon S3."
		],
		"wrongAnswersArray": [
			"Create an AWS Step Functions workflow. Define the task to transfer the data securely from Salesforce to Amazon S3.",
			"Create a custom connector for Salesforce to transfer the data securely from Salesforce to Amazon S3.",
			"Create AWS Lambda functions to transfer the data securely from Salesforce to Amazon S3."
		]
	},
	{
		"question": "A company plans to migrate to AWS and use Amazon EC2 On-Demand Instances for its application. During the migration testing phase, a technical team observes that the application takes a long time to launch and load memory to become fully productive. Which solution will reduce the launch time of the application during the next testing phase?",
		"correctAnswersArray": [
			"Launch two or more EC2 On-Demand Instances. Turn on auto scaling features and make the EC2 On-Demand Instances available during the next testing phase."
		],
		"wrongAnswersArray": [
			"Launch the EC2 On-Demand Instances with hibernation turned on. Configure EC2 Auto Scaling warm pools during the next testing phase.",
			"Launch EC2 Spot Instances to support the application and to scale the application so it is available during the next testing phase.",
			"Launch EC2 On-Demand Instances with Capacity Reservations. Start additional EC2 instances during the next testing phase."
		]
	},
	{
		"question": "A solutions architect is designing an AWS Identity and Access Management (IAM) authorization model for a company's AWS account. The company has designated five specific employees to have full access to AWS services and resources in the AWS account. The solutions architect has created an IAM user for each of the five designated employees and has created an IAM user group. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Attach the AdministratorAccess identity-based policy to the IAM user group. Place each of the five designated employee IAM users in the IAM user group."
		],
		"wrongAnswersArray": [
			"Attach the SystemAdministrator identity-based policy to the IAM user group. Place each of the five designated employee IAM users in the IAM user group.",
			"Attach the SystemAdministrator resource-based policy to the IAM user group. Place each of the five designated employee IAM users in the IAM user group.",
			"Attach the AdministratorAccess resource-based policy to the IAM user group. Place each of the five designated employee IAM users in the IAM user group."
		]
	},
	{
		"question": "A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion. Which combination of steps should a solutions architect take to meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"Enable versioning on the S3 bucket.",
			"Enable MFA Delete on the S3 bucket."
		],
		"wrongAnswersArray": [
			"Create a bucket policy on the S3 bucket.",
			"Enable default encryption on the S3 bucket.",
			"Create a lifecycle policy for the objects in the S3 bucket."
		]
	},
	{
		"question": "A medical research lab produces data that is related to a new study. The lab wants to make the data available with minimum latency to clinics across the country for their on-premises, file-based applications. The data files are stored in an Amazon S3 bucket that has read-only permissions for each clinic. What should a solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Deploy an AWS Storage Gateway file gateway as a virtual machine (VM) on premises at each clinic."
		],
		"wrongAnswersArray": [
			"Migrate the files to each clinic's on-premises applications by using AWS DataSync for processing.",
			"Attach an Amazon Elastic File System (Amazon EFS) file system to each clinic's on-premises servers.",
			"Deploy an AWS Storage Gateway volume gateway as a virtual machine (VM) on premises at each clinic."
		]
	},
	{
		"question": "A company needs to use its on-premises LDAP directory service to authenticate its users to the AWS Management Console. The directory service is not compatible with Security Assertion Markup Language (SAML). Which solution meets these requirements?",
		"correctAnswersArray": [
			"Develop an on-premises custom identity broker application or process that uses AWS Security Token Service (AWS STS) to get short-lived credentials."
		],
		"wrongAnswersArray": [
			"Enable AWS IAM Identity Center (AWS Single Sign-On) between AWS and the on-premises LDAP.",
			"Set up a process that rotates the IAM credentials whenever LDAP credentials are updated.",
			"Create an IAM policy that uses AWS credentials, and integrate the policy into LDAP."
		]
	},
	{
		"question": "A company runs its workloads on Amazon Elastic Container Service (Amazon ECS). The container images that the ECS task definition uses need to be scanned for Common Vulnerabilities and Exposures (CVEs). New container images that are created also need to be scanned. Which solution will meet these requirements with the FEWEST changes to the workloads?",
		"correctAnswersArray": [
			"Use Amazon Elastic Container Registry (Amazon ECR) as a private image repository to store the container images. Specify scan on push filters for the ECR basic scan."
		],
		"wrongAnswersArray": [
			"Store the container images in an Amazon S3 bucket. Use Amazon Macie to scan the images. Use an S3 Event Notification to initiate a Macie scan for every event with an s3 ObjectCreated Put event type.",
			"Deploy the workloads to Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Container Registry (Amazon ECR) as a private image repository. Specify scan on push filters for the ECR enhanced scan.",
			"Store the container images in an Amazon S3 bucket that has versioning enabled. Configure an S3 Event Notification for s3 ObjectCreated * events to invoke an AWS Lambda function. Configure the Lambda function to initiate an Amazon Inspector scan."
		]
	},
	{
		"question": "A company hosts its application on AWS. The company uses Amazon Cognito to manage users. When users log in to the application, the application fetches required data from Amazon DynamoDB by using a REST API that is hosted in Amazon API Gateway. The company wants an AWS managed solution that will control access to the REST API to reduce development efforts. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request."
		],
		"wrongAnswersArray": [
			"Configure an AWS Lambda function to be an authorizer in API Gateway to validate which user made the request.",
			"For each user, create and assign an API key that must be sent with each request. Validate the key by using an AWS Lambda function.",
			"Send the user's email address in the header with every request. Invoke an AWS Lambda function to validate that the user with that email address has proper access."
		]
	},
	{
		"question": "A company is building a containerized application on premises and decides to move the application to AWS. The application will have thousands of users soon after it is deployed. The company is unsure how to manage the deployment of containers at scale. The company needs to deploy the containerized application in a highly available architecture that minimizes operational overhead. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use target tracking to scale automatically based on demand."
		],
		"wrongAnswersArray": [
			"Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use target tracking to scale automatically based on demand.",
			"Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2 instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon CloudWatch. Launch new EC2 instances as needed.",
			"Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to scale out EC2 instances when the average CPU utilization threshold is breached."
		]
	},
	{
		"question": "A company has users all around the world accessing its HTTP-based application deployed on Amazon EC2 instances in multiple AWS Regions. The company wants to improve the availability and performance of the application. The company also wants to protect the application against common web exploits that may affect availability, compromise security, or consume excessive resources. Static IP addresses are required. What should a solutions architect recommend to accomplish this?",
		"correctAnswersArray": [
			"Put the EC2 instances behind Application Load Balancers (ALBs) in each Region. Deploy AWS WAF on the ALBs. Create an accelerator using AWS Global Accelerator and register the ALBs as endpoints."
		],
		"wrongAnswersArray": [
			"Put the EC2 instances behind Network Load Balancers (NLBs) in each Region. Deploy AWS WAF on the NLBs. Create an accelerator using AWS Global Accelerator and register the NLBs as endpoints.",
			"Put the EC2 instances behind Application Load Balancers (ALBs) in each Region. Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to route requests to the ALBs. Deploy AWS WAF on the CloudFront distribution.",
			"Put the EC2 instances behind Network Load Balancers (NLBs) in each Region. Deploy AWS WAF on the NLBs. Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to route requests to the NLBs."
		]
	},
	{
		"question": "A company hosts a serverless application on AWS. The application uses Amazon API Gateway, AWS Lambda, and an Amazon RDS for PostgreSQL database. The company notices an increase in application errors that result from database connection timeouts during times of peak traffic or unpredictable traffic. The company needs a solution that reduces the application failures with the least amount of change to the code. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Enable RDS Proxy on the RDS DB instance."
		],
		"wrongAnswersArray": [
			"Resize the RDS DB instance class to accept more connections.",
			"Migrate the database to Amazon DynamoDB with on-demand scaling.",
			"Reduce the Lambda concurrency rate."
		]
	},
	{
		"question": "A company's facility has badge readers at every entrance throughout the building. When badges are scanned, the readers send a message over HTTPS to indicate who attempted to access that particular entrance. A solutions architect must design a system to process these messages from the sensors. The solution must be highly available, and the results must be made available for the company's security team to analyze. Which system architecture should the solutions architect recommend?",
		"correctAnswersArray": [
			"Create an HTTPS endpoint in Amazon API Gateway. Configure the API Gateway endpoint to invoke an AWS Lambda function to process the messages and save the results to an Amazon DynamoDB table."
		],
		"wrongAnswersArray": [
			"Use Amazon Route 53 to direct incoming sensor messages to an AWS Lambda function. Configure the Lambda function to process the messages and save the results to an Amazon DynamoDB table.",
			"Launch an Amazon EC2 instance to serve as the HTTPS endpoint and to process the messages. Configure the EC2 instance to save the results to an Amazon S3 bucket.",
			"Create a gateway VPC endpoint for Amazon S3. Configure a Site-to-Site VPN connection from the facility network to the VPC so that sensor data can be written directly to an S3 bucket by way of the VPC endpoint."
		]
	},
	{
		"question": "An ecommerce company runs its application on AWS. The application uses an Amazon Aurora PostgreSQL cluster in Multi-AZ mode for the underlying database. During a recent promotional campaign, the application experienced heavy read load and write load. Users experienced timeout issues when they attempted to access the application. A solutions architect needs to make the application architecture more scalable and highly available. Which solution will meet these requirements with the LEAST downtime?",
		"correctAnswersArray": [
			"Modify the Aurora cluster and activate the zero-downtime restart (ZDR) feature. Use Database Activity Streams on the cluster to track the cluster status."
		],
		"wrongAnswersArray": [
			"Create an Amazon EventBridge rule that has the Aurora cluster as a source. Create an AWS Lambda function to log the state change events of the Aurora cluster. Add the Lambda function as a target for the EventBridge rule. Add additional reader nodes to fail over to.",
			"Create an Amazon ElastiCache for Redis cache. Replicate data from the Aurora cluster to Redis by using AWS Database Migration Service (AWS DMS) with a write-around approach.",
			"Add additional reader instances to the Aurora cluster. Create an Amazon RDS Proxy target group for the Aurora cluster."
		]
	},
	{
		"question": "A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS. What should a solutions architect do to meet this requirement?",
		"correctAnswersArray": [
			"Create a listener rule on the ALB to redirect HTTP traffic to HTTPS."
		],
		"wrongAnswersArray": [
			"Update the ALB's network ACL to accept only HTTPS traffic.",
			"Create a rule that replaces the HTTP in the URL with HTTPS.",
			"Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI)."
		]
	},
	{
		"question": "A research company uses on-premises devices to generate data for analysis. The company wants to use the AWS Cloud to analyze the data. The devices generate .csv files and support writing the data to an SMB file share. Company analysts must be able to use SQL commands to query the data. The analysts will run queries periodically throughout the day. Which combination of steps will meet these requirements MOST cost-effectively? (Select THREE.)",
		"correctAnswersArray": [
			"Deploy an AWS Storage Gateway on premises in Amazon S3 File Gateway mode.",
			"Set up Amazon Athena to query the data that is in Amazon S3. Provide access to analysts.",
			"Set up an AWS Glue crawler to create a table based on the data that is in Amazon S3."
		],
		"wrongAnswersArray": [
			"Deploy an AWS Storage Gateway on premises in Amazon FS File Gateway mode.",
			"Set up an Amazon Redshift cluster to query the data that is in Amazon S3. Provide access to analysts.",
			"Set up an Amazon EMR cluster with EMR File System (EMRFS) to query the data that is in Amazon S3. Provide access to analysts.",
		]
	},
	{
		"question": "A company is designing a new web application that will run on Amazon EC2 Instances. The application will use Amazon DynamoDB for backend data storage. The application traffic will be unpredictable. The company expects that the application read and write throughput to the database will be moderate to high. The company needs to scale in response to application traffic. Which DynamoDB table configuration will meet these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Configure DynamoDB in on-demand mode by using the DynamoDB Standard table class."
		],
		"wrongAnswersArray": [
			"Configure DynamoDB in on-demand mode by using the DynamoDB Standard Infrequent Access (DynamoDB Standard-IA) table class.",
			"Configure DynamoDB with provisioned read and write by using the DynamoDB Standard table class. Set DynamoDB auto scaling to a maximum defined capacity.",
			"Configure DynamoDB with provisioned read and write by using the DynamoDB Standard Infrequent Access (DynamoDB Standard-IA) table class. Set DynamoDB auto scaling to a maximum defined capacity."
		]
	},
	{
		"question": "A company has AWS Lambda functions that use environment variables. The company does not want its developers to see environment variables in plaintext. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create an AWS Key Management Service (AWS KMS) key. Enable encryption helpers on the Lambda functions to use the KMS key to store and encrypt the environment variables."
		],
		"wrongAnswersArray": [
			"Create a certificate in AWS Certificate Manager (ACM). Configure the Lambda functions to use the certificate to encrypt the environment variables.",
			"Deploy code to Amazon EC2 instances instead of using Lambda functions.",
			"Configure SSL encryption on the Lambda functions to use AWS CloudHSM to store and encrypt the environment variables."
		]
	},
	{
		"question": "A company has an on-premises volume backup solution that has reached its end of life. The company wants to use AWS as part of a new backup solution and wants to maintain local access to all the data while it is backed up on AWS. The company wants to ensure that the data backed up on AWS is automatically and securely transferred. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use AWS Storage Gateway and configure a stored volume gateway. Run the Storage Gateway software appliance on premises and map the gateway storage volumes to on-premises storage. Mount the gateway storage volumes to provide local access to the data."
		],
		"wrongAnswersArray": [
			"Use AWS Snowball Edge to migrate data out of the on-premises solution to Amazon S3. Use the Snowball Edge file interface to provide on-premises systems with local access to the data.",
			"Use AWS Snowball to migrate data out of the on-premises solution to Amazon S3. Configure on-premises systems to mount the Snowball S3 endpoint to provide local access to the data.",
			"Use AWS Storage Gateway and configure a cached volume gateway. Run the Storage Gateway software appliance on premises and configure a percentage of data to cache locally. Mount the gateway storage volumes to provide local access to the data."
		]
	},
	{
		"question": "To meet security requirements, a company needs to encrypt all of its application data in transit while communicating with an Amazon RDS MySQL DB instance. A recent security audit revealed that encryption at rest is enabled using AWS Key Management Service (AWS KMS), but data in transit is not enabled. What should a solutions architect do to satisfy the security requirements?",
		"correctAnswersArray": [
			"Download AWS-provided root certificates. Provide the certificates in all connections to the RDS instance."
		],
		"wrongAnswersArray": [
			"Enable IAM database authentication on the database.",
			"Take a snapshot of the RDS instance. Restore the snapshot to a new instance with encryption enabled.",
			"Provide self-signed certificates. Use the certificates in all connections to the RDS instance."
		]
	},
	{
		"question": "A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day. What should a solutions architect do to transmit and process the clickstream data?",
		"correctAnswersArray": [
			"Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis."
		],
		"wrongAnswersArray": [
			"Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis.",
			"Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics.",
			"Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket, run an AWS Lambda function to process the data for analysis."
		]
	},
	{
		"question": "A company is deploying a new application to Amazon Elastic Kubernetes Service (Amazon EKS) with an AWS Fargate cluster. The application needs a storage solution for data persistence. The solution must be highly available and fault tolerant. The solution also must be shared between multiple application containers. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Create an Amazon Elastic File System (Amazon EFS) file system. Register the file system in a StorageClass object on an EKS cluster. Use the same file system for all containers."
		],
		"wrongAnswersArray": [
			"Create an Amazon Elastic Block Store (Amazon EBS) volume. Register the volume in a StorageClass obiect on an EKS cluster. Use the same volume for all containers.",
			"Create Amazon Elastic Block Store (Amazon EBS) volumes in the same Availability Zones where EKS worker nodes are placed. Register the volumes in a StorageClass object on an EKS cluster. Use EBS Multi-Attach to share the data between containers.",
			"Create Amazon Elastic File System (Amazon EFS) file systems in the same Availability Zones where EKS worker nodes are placed. Register the file systems in a StorageClass object on an EKS cluster. Create an AWS Lambda function to synchronize the data between file systems."
		]
	},
	{
		"question": "A company has an Amazon S3 bucket that contains mission-critical data. The company wants to ensure this data is protected from accidental deletion. The data should still be accessible, and a user should be able to delete the data intentionally. Which combination of steps should a solutions architect take to accomplish this? (Choose two.)",
		"correctAnswersArray": ["Enable MFA Delete on the S3 bucket.", "CEnable versioning on the S3 bucket."],
		"wrongAnswersArray": [
			"Create a bucket policy on the S3 bucket.",
			"Enable default encryption on the S3 bucket.",
			"Create a lifecycle policy for the objects in the S3 bucket."
		]
	},
	{
		"question": "A company has several Amazon EC2 instances set up in a private subnet for security reasons. These instances host applications that read and write large amounts of data to and from Amazon S3 regularly. Currently, subnet routing directs all the traffic destined for the internet through a NAT gateway. The company wants to optimize the overall cost without impacting the ability of the application to communicate with Amazon S3 or the outside internet. What should a solutions architect do to optimize costs?",
		"correctAnswersArray": [
			"Create a VPC endpoint for Amazon S3. Attach an endpoint policy to the endpoint. Update the route table to direct traffic to the VPC endpoint."
		],
		"wrongAnswersArray": [
			"Create an AWS Lambda function outside of the VPC to handle S3 requests. Attach an IAM policy to the EC2 instances, allowing them to invoke the Lambda function.",
			"Create an additional NAT gateway. Update the route table to route to the NAT gateway. Update the network ACL to allow S3 traffic.",
			"Create an internet gateway. Update the route table to route traffic to the internet gateway. Update the network ACL to allow S3 traffic."
		]
	},
	{
		"question": "A company wants to reduce its Amazon S3 storage costs in its production environment without impacting durability or performance of the stored objects. What is the FIRST step the company should take to meet these objectives?",
		"correctAnswersArray": [
			"Migrate the objects in all S3 buckets to S3 Intelligent-Tiering."
		],
		"wrongAnswersArray": [
			"Enable S3 analytics to identify S3 buckets that are candidates for transitioning to S3 Standard-Infrequent Access (S3 Standard-IA).",
			"Enable versioning on all business-critical S3 buckets.",
			"Enable Amazon Macie on the business-critical S3 buckets to classify the sensitivity of the objects."
		]
	},
	{
		"question": "A company is using Site-to-Site VPN connections for secure connectivity to its AWS Cloud resources from on premises. Due to an increase in traffic across the VPN connections to the Amazon EC2 instances, users are experiencing slower VPN connectivity. Which solution will improve the VPN throughput?",
		"correctAnswersArray": [
			"Use a transit gateway with equal cost multipath routing and add additional VPN tunnels."
		],
		"wrongAnswersArray": [
			"Increase the number of tunnels in the VPN configuration to scale the throughput beyond the default limit.",
			"Implement multiple customer gateways for the same network to scale the throughput.",
			"Configure a virtual private gateway with equal cost multipath routing and multiple channels."
		]
	},
	{
		"question": "A company runs an application that uses multiple Amazon EC2 instances to gather data from its users. The data is then processed and transferred to Amazon S3 for long-term storage. A review of the application shows that there were long periods of time when the EC2 instances were not being used. A solutions architect needs to design a solution that optimizes utilization and reduces costs. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Redesign the application to use an event-driven design with Amazon Simple Queue Service (Amazon SQS) and AWS Lambda."
		],
		"wrongAnswersArray": [
			"Create an Amazon CloudWatch cron job to automatically stop the EC2 instances when there is no activity.",
			"Build the application to use Amazon Lightsail with On-Demand Instances.",
			"Use Amazon EC2 in an Auto Scaling group with On-Demand instances."
		]
	},
	{
		"question": "A company hosts multiple production applications. One of the applications consists of resources from Amazon EC2, AWS Lambda, Amazon RDS, Amazon Simple Notification Service (Amazon SNS), and Amazon Simple Queue Service (Amazon SQS) across multiple AWS Regions. All company resources are tagged with a tag name of ג€applicationג€ and a value that corresponds to each application. A solutions architect must provide the quickest solution for identifying all of the tagged components. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Run a query with the AWS Resource Groups Tag Editor to report on the resources globally with the application tag."
		],
		"wrongAnswersArray": [
			"Use the AWS CLI to query each service across all Regions to report the tagged components.",
			"Use AWS CloudTrail to generate a list of resources with the application tag.",
			"Run a query in Amazon CloudWatch Logs Insights to report on the components with the application tag."
		]
	},
	{
		"question": "A company has a multi-tier application deployed on several Amazon EC2 instances in an Auto Scaling group. An Amazon RDS for Oracle instance is the application, data layer that uses Oracle-specific PSQL functions. Traffic to the application has been steadily increasing. This is causing the EC2 instances to become overloaded and RDS instance to run out of storage. The Auto Scaling group does not have any scaling metrics and defines the minimum healthy instance count only. The company predicts that traffic will continue to increase at a steady but unpredictable rate before leveling off. What should a solutions architect do to ensure the system can automatically scale for the increased traffic? (Choose two.)",
		"correctAnswersArray": [
			"Configure storage Auto Scaling on the RDS for Oracle instance.",
			"Configure the Auto Scaling group to use the average CPU as the scaling metric",
		],
		"wrongAnswersArray": [
			"Migrate the database to Amazon Aurora to use Auto Scaling storage.",
			"Configure an alarm on the RDS for Oracle instance for low free storage space.",
			"Configure the Auto Scaling group to use the average free memory as the scaling metric."
		]
	},
	{
		"question": "A company has an on-premises business application that generates hundreds of files each day. These files are stored on an SMB file share and require a low- latency connection to the application servers. A new company policy states all application-generated files must be copied to AWS. There is already a VPN connection to AWS. The application development team does not have time to make the necessary code modifications to move the application to AWS. Which service should a solutions architect recommend to allow the application to copy files to AWS?",
		"correctAnswersArray": [
			"AWS Storage Gateway"
		],
		"wrongAnswersArray": [
			"AWS Snowball",
			"Amazon FSx for Windows File Server",
			"Amazon Elastic File System (Amazon EFS)"
		]
	},
	{
		"question": "A team has an application that detects new objects being uploaded into an Amazon S3 bucket. The uploads trigger AWS Lambda function to write object metadata into an Amazon DynamoDB table and an Amazon RDS for PostgreSQL database. Which action should the team take to ensure high availability?",
		"correctAnswersArray": [
			"Enable Multi-AZ on the RDS for PostgreSQL database"
		],
		"wrongAnswersArray": [
			"Create a DynamoDB stream for the DynamoDB table.",
			"Enable Cross-Region Replication in the S3 bucket.",
			"Create a Lambda function for each Availability Zone the application is deployed in."
		]
	},
	{
		"question": "An engineering team is developing and deploying AWS Lambda functions. The team needs to create roles and manage policies in AWS IAM to configure the permissions of the Lambda functions. How should the permissions for the team be configured so they also adhere to the concept of least privilege?",
		"correctAnswersArray": [
			"Create an IAM role with a managed policy attached that has permission boundaries specific to the Lambda functions. Allow the engineering team to assume this role."
		],
		"wrongAnswersArray": [
			"Create an IAM group for the engineering team with an IAMFullAccess policy attached. Add all the users from the team to this IAM group.",
			"Create an IAM role with a managed policy attached. Allow the engineering team and the Lambda functions to assume this role.",
			"Create an execution role for the Lambda functions. Attach a managed policy that has permission boundaries specific to these Lambda functions."
		]
	},
	{
		"question": "A disaster response team is using drones to collect images of recent storm damage. The response teamג€™s laptops lack the storage and compute capacity to transfer the images and process the data. While the team has Amazon EC2 instances for processing and Amazon S3 buckets for storage, network connectivity is intermittent and unreliable. The images need to be processed to evaluate the damage. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use AWS Snowball Edge devices to process and store the images."
		],
		"wrongAnswersArray": [
			"Use AWS Storage Gateway pre-installed on a hardware appliance to cache the images locally for Amazon S3 to process the images when connectivity becomes available.",
			"Upload the images to Amazon Simple Queue Service (Amazon SQS) during intermittent connectivity to EC2 instances.",
			"Configure Amazon Kinesis Data Firehose to create multiple delivery streams aimed separately at the S3 buckets for storage and the EC2 instances for processing the images."
		]
	},
	{
		"question": "A company has an application workflow that uses an AWS Lambda function to download and decrypt files from Amazon S3. These files are encrypted using AWS Key Management Service Customer Master Keys (AWS KMS CMKs). A solutions architect needs to design a solution that will ensure the required permissions are set correctly. Which combination of actions accomplish this? (Choose two.)",
		"correctAnswersArray": [
			"Grant the decrypt permission for the Lambda IAM role in the KMS key's policy.",
			"Create a new IAM role with the kms decrypt permission and attach the execution role to the Lambda function.",
		],
		"wrongAnswersArray": [
			"Create a new IAM policy with the kms decrypt permission and attach the policy to the Lambda function.",
			"Grant the decrypt permission for the Lambda resource policy in the KMS key's policy.",
			"Attach the kms decrypt permission to the Lambda functionג€™s resource policy."
		]
	},
	{
		"question": "A company is planning to migrate a legacy application to AWS. The application currently uses NFS to communicate to an on-premises storage solution to store application data. The application cannot be modified to use any other communication protocols other than NFS for this purpose. Which storage solution should a solutions architect recommend for use after the migration?",
		"correctAnswersArray": [
			"Amazon Elastic File System (Amazon EFS)"
		],
		"wrongAnswersArray": [
			"Amazon Elastic Block Store (Amazon EBS)",
			"AWS DataSync",
			"Amazon EMR File System (Amazon EMRFS)"
		]
	},
	{
		"question": "A company stores call recordings on a monthly basis. Statistically, the recorded data may be referenced randomly within a year but accessed rarely after 1 year. Files that are newer than 1 year old must be queried and retrieved as quickly as possible. A delay in retrieving older files is acceptable. A solutions architect needs to store the recorded data at a minimal cost. Which solution is MOST cost-effective?",
		"correctAnswersArray": [
			"Store individual files in Amazon S3. Use lifecycle policies to move the files to Amazon S3 Glacier after1 year. Query and retrieve the files from Amazon S3 or S3 Glacier"
		],
		"wrongAnswersArray": [
			"Archive individual files and store search metadata for each archive in Amazon S3. Use lifecycle policies to move the files to Amazon S3 Glacier after 1 year. Query and retrieve the files by searching for metadata from Amazon S3.",
			"Store individual files in Amazon S3 Glacier and store search metadata in object tags created in S3 Glacier Query S3 Glacier tags and retrieve the files from S3 Glacier.",
			"Archive individual files in Amazon S3. Use lifecycle policies to move the files to Amazon S3 Glacier after 1 year. Store search metadata in Amazon DynamoDB. Query the files from DynamoDB and retrieve them from Amazon S3 or S3 Glacier."
		]
	},
	{
		"question": "A company is storing sensitive user information in an Amazon S3 bucket. The company wants to provide secure access to this bucket from the application tier running on Amazon EC2 instances inside a VPC. Which combination of steps should a solutions architect take to accomplish this? (Choose two.)",
		"correctAnswersArray": ["Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.", "Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket",
			"Configure a VPC gateway endpoint for Amazon S3 within the VPC.",
		],
		"wrongAnswersArray": [
			"Create a bucket policy that limits access to only the application tier running in the VPC.",
			"Create a bucket policy to make the objects in the S3 bucket public",
			"Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance."
		]
	},
	{
		"question": "A company that operates a web application on premises is preparing to launch a newer version of the application on AWS. The company needs to route requests to either the AWS-hosted or the on-premises-hosted application based on the URL query string. The on-premises application is not available from the internet, and a VPN connection is established between Amazon VPC and the companyג€™s data center. The company wants to use an Application Load Balancer (ALB) for this launch. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use one ALB with two target groups one for the AWS resource and one for on premises. Add hosts to each target group of the ALB. Configure listener rules based on the URL query string."
		],
		"wrongAnswersArray": [
			"Use two ALBs one for on-premises and one for the AWS resource. Add hosts to the target group of each ALB. Create a software router on an EC2 instance based on the URL query string.",
			"Use one ALB with two AWS Auto Scaling groups one for the AWS resource and one for on premises. Add hosts to each Auto Scaling group. Route with Amazon Route 53 based on the URL query string.",
			"Use two ALBs one for on-premises and one for the AWS resource. Add hosts to each target group of each ALB. Route with Amazon Route 53 based on the URL query string."
		]
	},
	{
		"question": "A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains over 10 million rows. The database has 2 TB of General Purpose SSD (gp2) storage. There are millions of updates against this data every day through the companyג€™s website. The company has noticed some operations are taking 10 seconds or longer and has determined that the database storage performance is the bottleneck. Which solution addresses the performance issue?",
		"correctAnswersArray": [
			"Change the storage type to Provisioned IOPS SSD (io1)"
		],
		"wrongAnswersArray": [
			"Change the instance to a memory-optimized instance class.",
			"Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication.",
			"Change the instance to a burstable performance DB instance class."
		]
	},
	{
		"question": "A company has an application running on Amazon EC2 instances in a private subnet. The application needs to store and retrieve data in Amazon S3. To reduce costs, the company wants to configure its AWS resources in a cost-effective manner. How should the company accomplish this?",
		"correctAnswersArray": [
			"Deploy an S3 gateway endpoint to access the S3 buckets."
		],
		"wrongAnswersArray": [
			"Deploy an S3 interface endpoint to access the S3 buckets.",
			"Deploy a NAT gateway to access the S3 buckets.",
			"Deploy AWS Storage Gateway to access the S3 buckets."
		]
	},
	{
		"question": "A development team is deploying a new product on AWS and is using AWS Lambda as part of the deployment. The team allocates 512 MB of memory for one of the Lambda functions. With this memory allocation, the function is completed in 2 minutes. The function runs millions of times monthly, and the development team is concerned about cost. The team conducts tests to see how different Lambda memory allocations affect the cost of the function. Which steps will reduce the Lambda costs for the product? (Choose two.)",
		"correctAnswersArray": [
			"Increase the memory allocation for this Lambda function to 1,024 MB if this change causes the execution time of each function to be less than 1 minute.",
			"Reduce the memory allocation for this Lambda function to 256 MB if this change causes the execution time of each function to be less than 4 minutes."
		],
		"wrongAnswersArray": [
			"Increase the memory allocation for this Lambda function to 1,024 MB if this change causes the execution time of each function to be less than 90 seconds.",
			"Reduce the memory allocation for this Lambda function to 256 MB if this change causes the execution time of each function to be less than 5 minutes.",
			"Increase the memory allocation for this Lambda function to 2,048 MB if this change causes the execution time of each function to be less than 1 minute."
		]
	},
	{
		"question": "A company is building a payment application that must be highly available even during regional service disruptions. A solutions architect must design a data storage solution that can be easily replicated and used in other AWS Regions. The application also requires low-latency atomicity, consistency, isolation, and durability (ACID) transactions that need to be immediately available to generate reports The development team also needs to use SQL. Which data storage solution meets these requirements?",
		"correctAnswersArray": [
			"Amazon Aurora Global Database"
		],
		"wrongAnswersArray": [
			"Amazon S3 with cross-Region replication and Amazon Athena",
			"MySQL on Amazon EC2 instances with Amazon Elastic Block Store (Amazon EBS) snapshot replication",
			"Amazon DynamoDB global tables"
		]
	},
	{
		"question": "A recently created startup built a three-tier web application. The front end has static content. The application layer is based on microservices. User data is stored as JSON documents that need to be accessed with low latency. The company expects regular traffic to be low during the first year, with peaks in traffic when it publicizes new features every month. The startup team needs to minimize operational overhead costs. What should a solutions architect recommend to accomplish this?",
		"correctAnswersArray": [
			"Use Amazon S3 static website hosting to store and serve the front end. Use Amazon API Gateway and AWS Lambda functions for the application layer. Use Amazon DynamoDB to store user data."
		],
		"wrongAnswersArray": [
			"Use Amazon S3 static website hosting to store and serve the front end. Use Amazon Elastic KubernetesService (Amazon EKS) for the application layer. Use Amazon DynamoDB to store user data.",
			"Use Amazon S3 static website hosting to store and serve the front end. Use AWS Elastic Beanstalk for the application layer. Use Amazon DynamoDB to store user data.",
			"Use Amazon S3 static website hosting to store and serve the front end. Use Amazon API Gateway and AWS Lambda functions for the application layer. Use Amazon RDS with read replicas to store user data."
		]
	},
	{
		"question": "A solutions architect is developing a multiple-subnet VPC architecture. The solution will consist of six subnets in two Availability Zones. The subnets are defined as public, private and dedicated for databases. Only the Amazon EC2 instances running in the private subnets should be able to access a database. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Create a security group that allows ingress from the security group used by instances in the private subnets. Attach the security group to an Amazon RDS DB instance."
		],
		"wrongAnswersArray": [
			"Create a new route table that excludes the route to the public subnetsג€™ CIDR blocks. Associate the route table to the database subnets.",
			"Create a security group that denies ingress from the security group used by instances in the public subnets. Attach the security group to an Amazon RDS DB instance.",
			"Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets."
		]
	},
	{
		"question": "A company wants to host its web application on AWS using multiple Amazon EC2 instances across different AWS Regions. Since the application content will be specific to each geographic region, the client requests need to be routed to the server that hosts the content for that clients Region. What should a solutions architect do to accomplish this?",
		"correctAnswersArray": [
			"Configure Amazon Route 53 with a geolocation routing policy."
		],
		"wrongAnswersArray": [
			"Configure Amazon Route 53 with a multivalue answer routing policy",
			"Configure Amazon Route 53 with a latency routing policy.",
			"Configure Amazon Route 53 with a weighted routing policy"
		]
	},
	{
		"question": "A company is building a web-based application running on Amazon EC2 instances in multiple Availability Zones. The web application will provide access to a repository of text documents totaling about 900 TB in size. The company anticipates that the web application will experience periods of high demand. A solutions architect must ensure that the storage component for the text documents can scale to meet the demand of the application at all times. The company is concerned about the overall cost of the solution. Which storage solution meets these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Amazon S3"
		],
		"wrongAnswersArray": [
			"Amazon Elastic File System (Amazon EFS)",
			"Amazon Elasticsearch Service (Amazon ES)",
			"Amazon Elastic Block Store (Amazon EBS)"
		]
	},
	{
		"question": "An application calls a service run by a vendor. The vendor charges based on the number of calls. The finance department needs to know the number of calls that are made to the service to validate the billing statements. How can a solutions architect design a system to durably store the number of calls without requiring changes to the application?",
		"correctAnswersArray": [
			"Publish a custom Amazon CloudWatch metric that counts calls to the service."
		],
		"wrongAnswersArray": [
			"Call the service through an internet gateway.",
			"Call the service through a VPC peering connection.",
			"Decouple the application from the service with an Amazon Simple Queue Service (Amazon SQS) queue."
		]
	},
	{
		"question": "A solutions architect is planning the deployment of a new static website. The solution must minimize costs and provide at least 99% availability. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Deploy the application to an Amazon S3 bucket in one AWS Region that has versioning disabled."
		],
		"wrongAnswersArray": [
			"Deploy the application to an Amazon EC2 instance that runs in one AWS Region and one Availability Zone.",
			"Deploy the application to an Amazon S3 bucket that has versioning and cross-Region replication enabled.",
			"Deploy the application to Amazon EC2 instances that run in two AWS Regions and two Availability Zones."
		]
	},
	{
		"question": "A company is deploying an application in three AWS Regions using an Application Load Balancer Amazon Route 53 will be used to distribute traffic between these Regions. Which Route 53 configuration should a solutions architect use to provide the MOST high-performing experience?",
		"correctAnswersArray": [
			"Create an A record with a latency policy."
		],
		"wrongAnswersArray": [
			"Create a CNAME record with a failover policy.",
			"Create an A record with a geolocation policy.",
			"Create a CNAME record with a geoproximity policy."
		]
	},
	{
		"question": "A company is migrating a Linux-based web server group to AWS. The web servers must access files in a shared file store for some content. To meet the migration date, minimal changes can be made. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create an Amazon Elastic File System (Amazon EFS) volume and mount it on all web servers."
		],
		"wrongAnswersArray": [
			"Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin.",
			"Create an Amazon S3 Standard bucket with access to the web server.",
			"Configure Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS SSD (io1) volumes and mount them on all web servers."
		]
	},
	{
		"question": "A solutions architect plans to convert a companyג€™s monolithic web application into a multi-tier application. The company wants to avoid managing its own infrastructure. The minimum requirements for the web application are high availability, scalability, and regional low latency during peak hours. The solution should also store and retrieve data with millisecond latency using the applicationג€™s API. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use Amazon API Gateway with an edge-optimized API endpoint, AWS Lambda for compute, and Amazon DynamoDB as the data store."
		],
		"wrongAnswersArray": [
			"Use AWS Fargate to host the web application with backend Amazon RDS Multi-AZ DB instances.",
			"Use an Amazon CloudFront distribution that points to an Elastic Load Balancer with an Amazon EC2 Auto Scaling group, along with Amazon RDS Multi-AZ DB instances.",
			"Use an Amazon Route 53 routing policy with geolocation that points to an Amazon S3 bucket with static website hosting and Amazon DynamoDB as the data store."
		]
	},
	{
		"question": "A media company has an application that tracks user clicks on its websites and performs analytics to provide near-real time recommendations. The application has a Heel of Amazon EC2 instances that receive data from the websites and send the data to an Amazon RDS DB instance. Another fleet of EC2 instances hosts the portion of the application that is continuously checking changes in the database and executing SQL queries to provide recommendations. Management has requested a redesign to decouple the infrastructure. The solution must ensure that data analysts are writing SQL to analyze the data only No data can the lost during the deployment. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use Amazon Kinesis Data Streams to capture the data from the websites Kinesis Data Firehose to persist the data on Amazon S3, and Amazon Athena to query the data."
		],
		"wrongAnswersArray": [
			"Use Amazon Simple Notification Service (Amazon SNS) to receive data from the websites and proxy the messages to AWS Lambda functions that execute the queries and persist the data. Change Amazon RDS to Amazon Aurora Serverless to persist the data",
			"Use Amazon Kinesis Data Streams to capture the data from the websites. Kinesis Data Analytics to query the data, and Kinesis Data Firehose to persist the data on Amazon S3.",
			"Use Amazon Simple Queue Service (Amazon SQS) to capture the data from the websites, keep the fleet of EC2 instances, and change to a bigger instance type in the Auto Scaling group configuration."
		]
	},
	{
		"question": "A company has a mobile game that reads most of its metadata from an Amazon RDS DB instance. As the game increased in popularity developers noticed slowdowns related to the gameג€™s metadata load times. Performance metrics indicate that simply scaling the database will not help. A solutions architect must explore all options that include capabilities for snapshots replication and sub-millisecond response times. What should the solutions architect recommend to solve these issues?",
		"correctAnswersArray": [
			"Add an Amazon ElastiCache for Redis layer in front of the database."
		],
		"wrongAnswersArray": [
			"Migrate the database to Amazon DyramoDB with global tables.",
			"Migrate the database to Amazon Aurora with Aurora Replicas.",
			"Add an Amazon ElastiCache for Memcached layer in front of the database."
		]
	},
	{
		"question": "On Amazon EC2 instances, a business runs an application. The volume of traffic to the webpage grows significantly during business hours and then falls. The CPU usage of an Amazon EC2 instance is a good measure of the application's end-user demand. The organization has specified a minimum group size of two EC2 instances and a maximum group size of ten EC2 instances for an Auto Scaling group. The firm is worried that the Auto Scaling group's existing scaling policy may be incorrect. The organization must prevent excessive EC2 instance provisioning and paying unneeded fees. What recommendations should a solutions architect make to satisfy these requirements?",
		"correctAnswersArray": [
			"Configure a step scaling policy to add 4 EC2 instances at 50% CPU utilization and add another 4 EC2 instances at 90% CPU utilization. Configure scale-in policies to perform the reverse and remove EC2 instances based on the two values."
		],
		"wrongAnswersArray": [
			"Configure AWS Auto Scaling to use a scaling plan that enables predictive scaling. Configure predictive scaling with a scaling mode of forecast and scale, and to enforce the maximum capacity setting during scaling.",
			"Configure Amazon EC2 Auto Scaling to use a scheduled scaling plan and launch an additional 8 EC2 instances during business hours.",
			"Configure AWS Auto Scaling to have a desired capacity of 5 EC2 instances, and disable any existing scaling policies. Monitor the CPU utilization metric for 1 week. Then create dynamic scaling policies that are based on the observed values."
		]
	},
	{
		"question": "A firm runs a two-tier image processing program. The application is divided into two Availability Zones, each with its own public and private subnets. The web tier's Application Load Balancer (ALB) makes use of public subnets. Private subnets are used by Amazon EC2 instances at the application layer. The program is functioning more slowly than planned, according to users. According to a security audit of the web server log files, the application receives millions of unauthorized requests from a tiny number of IP addresses. While the organization finds a more permanent solution, a solutions architect must tackle the urgent performance issue.",
		"correctAnswersArray": [
			"Modify the network ACL for the web tier subnets. Add an inbound deny rule for the IP addresses that are consuming resources."
		],
		"wrongAnswersArray": [
			"Modify the inbound security group for the web tier. Add a deny rule for the IP addresses that are consuming resources",
			"Modify the network ACL for the application tier subnets. Add an inbound deny rule for the IP addresses that are consuming resources",
			"Modify the inbound security group for the application tier. Add a deny rule for the IP addresses that are consuming resources"
		]
	},
	{
		"question": "A company is planning to move a dynamic web application to AWS. Application assets are stored in a Linux file server. The total volume of data is 140 TB, and the company has 100 Mbps of internet bandwidth available. The company does not want to make any changes to the application during migration. File permissions must be preserved. How should a solutions architect migrate and store the data to meet these requirements?",
		"correctAnswersArray": [
			"Transfer the data by using the Amazon S3 interface for AWS Snowball. Use Amazon FSx for Lustre as the migration destination and for storage."
		],
		"wrongAnswersArray": [
			"Transfer the data by using the AWS CLI s3 cp command. Use Amazon EC2 with Amazon Elastic Block Store (Amazon EBS) as the migration destination and for storage.",
			"Transfer the data by using the file interface for AWS Snowball. Use Amazon Elastic File System (Amazon EFS) as the migration destination and for storage.",
			"Transfer the data by using AWS DataSync. Use AWS Storage Gateway File Gateway as the migration destination and for storage."
		]
	},
	{
		"question": "What are the effective IAM permissions of this policy for group members?",
		"correctAnswersArray": [
			"Group members are allowed the ec2 StopInstances and ec2 Terminatelnstances permissions for the us-east-1 Region only when logged in with multi-factor authentication (MFA). Group members are permitted any other Amazon EC2 action within the us-east-1 Region."
		],
		"wrongAnswersArray": [
			"Group members are denied any Amazon EC2 permissions in the us-east-1 Region unless they are logged in with multi-factor authentication (MFA).",
			"Group members are allowed the ec2 StopInstances and ec2 Terminatelnstances permissions for all Regions when logged in with multi-factor authentication (MFA). Group members are permitted any other Amazon EC2 action.",
			"Group members are permitted any Amazon EC2 action within the us-east-1 Region. Statements after the Allow permission are not applied."
		]
	},
	{
		"question": "A company has an internet-facing application that runs on premises. The application contains mostly user-generated content. The data is stored in an on-premises network-attached storage system. The company wants to archive this data annually and has chosen to move the archival data to Amazon S3. The company needs a solution to migrate the archival data into an S3 bucket. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use AWS DataSync. Create a configuration to replicate the data from the on-premises environment to Amazon S3."
		],
		"wrongAnswersArray": [
			"Use AWS Transfer Family. Use an SFTP client to serially transfer the data from the on-premises environment to Amazon S3.",
			"Use AWS Storage Gateway Volume Gateway. Cache the data, and then replicate the data from the on-premises environment to Amazon S3.",
			"Use Amazon S3 Transfer Acceleration. Use a third-party backup utility to replicate the data from the on-premises environment to Amazon S3."
		]
	},
	{
		"question": "A company has media and application files that need to be shared internally. Users currently are authenticated using Active Directory and access files from a Microsoft Windows platform. The chief executive officer wants to keep the same user permissions, but wants the company to improve the process as the company is reaching its storage capacity limit. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Configure Amazon FSx for Windows File Server and move all the media and application files."
		],
		"wrongAnswersArray": [
			"Set up Amazon EC2 on Windows, attach multiple Amazon Elastic Block Store (Amazon EBS) volumes, and move all media and application files.",
			"Configure Amazon Elastic File System (Amazon EFS) and move all media and application files.",
			"Set up a corporate Amazon S3 bucket and move all media and application files."
		]
	},
	{
		"question": "A company wants to host a web application on AWS that will communicate to a database within a VPC. The application should be highly available. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Deploy a load balancer in multiple Availability Zones with an Auto Scaling group for the web servers, and then deploy Amazon RDS in multiple Availability Zones."
		],
		"wrongAnswersArray": [
			"Deploy a load balancer in the public subnet with an Auto Scaling group for the web servers, and then deploy the database on an Amazon EC2 instance in the private subnet.",
			"Deploy two web servers with an Auto Scaling group, configure a domain that points to the two web servers, and then deploy a database architecture in multiple Availability Zones.",
			"Create two Amazon EC2 instances to host the web servers behind a load balancer, and then deploy the database on a large instance."
		]
	},
	{
		"question": "A business created a stateless two-tier application using Amazon EC2 in a single Availability Zone and an Amazon RDS Multi-AZ database instance. The new administration of the organization wants to guarantee that the application is highly accessible. What actions should a solutions architect do in order to satisfy this requirement?",
		"correctAnswersArray": [
			"Configure the application to use Multi-AZ EC2 Auto Scaling and create an Application Load Balancer."
		],
		"wrongAnswersArray": [
			"Configure Amazon Route 53 rules to handle incoming requests and create a Multi-AZ Application Load Balancer.",
			"Configure the application to use Amazon Route 53 latency-based routing to feed requests to the application.",
			"Configure the application to take snapshots of the EC2 instances and send them to a different AWS Region."
		]
	},
	{
		"question": "A business is transferring its data center and need a safe data transfer of 50 TB to AWS within two weeks. The present data center has a 90 percent used Site-to-Site VPN connection to AWS. Which Amazon Web Services offering could a solutions architect use to achieve these requirements?",
		"correctAnswersArray": [
			"AWS Snowball Edge Storage Optimized"
		],
		"wrongAnswersArray": [
			"AWS Storage Gateway",
			"AWS Direct Connect",
			"AWS DataSync with a VPC endpoint"
		]
	},
	{
		"question": "A company is running a critical business application on an Amazon EC2 instance. The EC2 instance is hosting an Apache web server and a MySQL database server. The application serves static content and dynamic content to end users. The application is experiencing severe availability issues because of heavy user demand. The company needs a solution that resolves the availability issues with the least operational effort and the least change to the application. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Host static content on Amazon S3. Deploy the application and the web server on AWS Fargate. Use an Application Load Balancer to route traffic. Migrate the database to Amazon Aurora Serverless."
		],
		"wrongAnswersArray": [
			"Host static content on Amazon S3. Deploy the application on EC2 instances that are configured in an Auto Scaling group. Use an Application Load Balancer to route traffic. Migrate the database to Amazon DynamoDB.",
			"Create an Amazon Machine Image (AMI) from the current EC2 instance. Create an Auto Scaling group to provide more capacity as needed. Use a Network Load Balancer to route traffic.",
			"Deploy the application and the web server on AWS Fargate. Use a Network Load Balancer to route traffic. Migrate the database to Amazon DynamoDB."
		]
	},
	{
		"question": "On a single Amazon EC2 instance, a business runs an ASP.NET MVC application. Due to a recent spike in application usage, users are experiencing poor response times during lunch hours. The firm must address this issue using the least amount of settings possible. What recommendations should a solutions architect make to satisfy these requirements?",
		"correctAnswersArray": [
			"Move the application to AWS Elastic Beanstalk. Configure load-based auto scaling and time-based scaling to handle scaling during lunch hours."
		],
		"wrongAnswersArray": [
			"Move the application to AWS Elastic Beanstalk. Configure load-based auto scaling, and create an AWS Lambda function to handle scaling during lunch hours.",
			"Move the application to Amazon Elastic Container Service (Amazon ECS). Create an AWS Lambda function to handle scaling during lunch hours.",
			"Move the application to Amazon Elastic Container Service (Amazon ECS). Configure scheduled scaling for AWS Application Auto Scaling during lunch hours."
		]
	},
	{
		"question": "An ecommerce firm is developing an application that will handle payments through a third-party payment provider. The payment provider must expressly permit access to the public IP address of the server making the payment request. However, the company's security regulations prohibit the direct connection of any server to the public internet. Which solution will satisfy these criteria?",
		"correctAnswersArray": [
			"Create a NAT gateway in a public subnet. Host the application servers on Amazon EC2 instances in a private subnet. Route payment requests through the NAT gateway."
		],
		"wrongAnswersArray": [
			"Deploy an Application Load Balancer (ALB). Host the application servers on Amazon EC2 instances in a private subnet. Route the payment requests through the ALB.",
			"Set up an AWS Client VPN connection to the payment service. Host the application servers on Amazon EC2 instances in a private subnet. Route the payment requests through the VPN.",
			"Provision an Elastic IP address. Host the application servers on Amazon EC2 instances in a private subnet. Assign the public IP address to the application servers."
		]
	},
	{
		"question": "A company copies 200 TB of data from a recent ocean survey onto AWS Snowball Edge Storage Optimized devices. The company has a high performance computing (HPC) cluster that is hosted on AWS to look for oil and gas deposits. A solutions architect must provide the cluster with consistent sub-millisecond latency and high-throughput access to the data on the Snowball Edge Storage Optimized devices. The company is sending the devices back to AWS. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create an Amazon S3 bucket. Import the data into the S3 bucket. Configure an Amazon FSx for Lustre file system, and integrate it with the S3 bucket. Access the FSx for Lustre file system from the HPC cluster instances."
		],
		"wrongAnswersArray": [
			"Create an Amazon FSx for Lustre file system. Import the data directly into the FSx for Lustre file system. Access the FSx for Lustre file system from the HPC cluster instances",
			"Create an Amazon S3 bucket. Import the data into the S3 bucket. Configure an AWS Storage Gateway file gateway to use the S3 bucket. Access the file gateway from the HPC cluster instances.",
			"Create an Amazon S3 bucket and an Amazon Elastic File System (Amazon EFS) file system. Import the data into the S3 bucket. Copy the data from the S3 bucket to the EFS file system. Access the EFS file system from the HPC cluster instances."
		]
	},
	{
		"question": "Each entry to a company's facility is equipped with badge readers. When badges are scanned, the readers transmit an HTTPS message indicating who tried to enter that specific entry. A solutions architect must develop a system that will handle these sensor signals. The solution must be highly accessible, with the findings made available for analysis by the company's security staff. Which system design should be recommended by the solutions architect?",
		"correctAnswersArray": [
			"Create an HTTPS endpoint in Amazon API Gateway. Configure the API Gateway endpoint to invoke an AWS Lambda function to process the messages and save the results to an Amazon DynamoDB table."
		],
		"wrongAnswersArray": [
			"Use Amazon Route 53 to direct incoming sensor messages to an AWS Lambda function. Configure the Lambda function to process the messages and save the results to an Amazon DynamoDB table.",
			"Launch an Amazon EC2 instance to serve as the HTTPS endpoint and to process the messages. Configure the EC2 instance to save the results to an Amazon S3 bucket.",
			"Create a gateway VPC endpoint for Amazon S3. Configure a Site-to-Site VPN connection from the facility network to the VPC so that sensor data can be written directly to an S3 bucket by way of the VPC endpoint."
		]
	},
	{
		"question": "A company needs to provide its employees with secure access to confidential and sensitive files. The company wants to ensure that the files can be accessed only by authorized users. The files must be downloaded securely to the employees devices. The files are stored in an on-premises Windows file server. However, due to an increase in remote usage, the file server is running out of capacity. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Migrate the files to an Amazon FSx for Windows File Server file system. Integrate the Amazon FSx file system with the on-premises Active Directory. Configure AWS Client VPN."
		],
		"wrongAnswersArray": [
			"Migrate the files to Amazon S3, and create a private VPC endpoint. Create a signed URL to allow download.",
			"Migrate the files to Amazon S3, and create a public VPC endpoint. Allow employees to sign on with AWS Single Sign-On.",
			"Migrate the file server to an Amazon EC2 instance in a public subnet. Configure the security group to limit inbound traffic to the employees IP addresses."
		]
	},
	{
		"question": "A business hosts an application on Amazon Web Services (AWS) and utilizes Amazon DynamoDB as the database. To handle data from the database, the organization adds Amazon EC2 instances to a private network. The organization connects to DynamoDB using two NAT instances. The corporation want to decommission its NAT instances. A solutions architect must develop a solution that connects to DynamoDB and is self-managing. Which approach is the MOST cost-effective in terms of meeting these requirements?",
		"correctAnswersArray": [
			"Create a gateway VPC endpoint to provide connectivity to DynamoDB."
		],
		"wrongAnswersArray": [
			"Configure a managed NAT gateway to provide connectivity to DynamoDB.",
			"Deploy an AWS PrivateLink endpoint service between the private network and DynamoDB.",
			"Establish an AWS Direct Connect connection between the private network and DynamoDB."
		]
	},
	{
		"question": "A company is architecting a shared storage solution for a gaming application that is hosted in the AWS Cloud. The company needs the ability to use Lustre clients to access data. The solution must be fully managed. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system."
		],
		"wrongAnswersArray": [
			"Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.",
			"Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.",
			"Create an AWS DataSync task that shares the data as a mountable file system. Mount the file system to the application server."
		]
	},
	{
		"question": "A business intends to transfer a TCP-based application onto the company's virtual private cloud (VPC). The program is available to the public over an unsupported TCP port via a physical device located in the company's data center. This public endpoint has a latency of less than 3 milliseconds and can handle up to 3 million requests per second. The organization needs the new public endpoint in AWS to function at the same level of performance. What solution architecture approach should be recommended to satisfy this requirement?",
		"correctAnswersArray": [
			"Deploy a Network Load Balancer (NLB). Configure the NLB to be publicly accessible over the TCP port that the application requires"
		],
		"wrongAnswersArray": [
			"Deploy an Amazon CloudFront distribution that listens on the TCP port that the application requires. Use an Application Load Balancer as the origin",
			"Deploy an Amazon API Gateway API that is configured with the TCP port that the application requires. Configure AWS Lambda functions with provisioned concurrency to process the requests",
			"Deploy an Application Load Balancer (ALB). Configure the ALB to be publicly accessible over the TCP port that the application requires."
		]
	},
	{
		"question": "A business that specializes in online gaming is developing a game that is predicted to be very popular around the globe. A solutions architect must create an AWS Cloud architecture capable of capturing and presenting near-real-time game data for each participant, as well as the names of the world's top 25 players at any one moment. Which AWS database solution and configuration should be used to satisfy these requirements?",
		"correctAnswersArray": [
			"Use Amazon DynamoDB as the data store for player activity. Configure global tables in each required AWS Region for the player data."
		],
		"wrongAnswersArray": [
			"Use Amazon DynamoDB as the data store for player activity. Configure DynamoDB Accelerator (DAX) for the player data.",
			"Use Amazon RDS for MySQL as the data store for player activity. Configure cross-Region read replicas in each required AWS Region based on player proximity.",
			"Use Amazon RDS for MySQL as the data store for player activity. Configure the RDS DB instance for Multi-AZ support."
		]
	},
	{
		"question": "A company runs a web application that is backed by Amazon RDS. A new database administrator caused data loss by accidentally editing information in a database table. To help recover from this type of incident, the company wants the ability to restore the database to its state from 5 minutes before any change within the last 30 days. Which feature should the solutions architect include in the design to meet this requirement?",
		"correctAnswersArray": [
			"Automated backups"
		],
		"wrongAnswersArray": [
			"Read replicas",
			"Multi-AZ deployments",
			"Manual snapshots"
		]
	},
	{
		"question": "A company has an application that runs on Amazon EC2 instances within a private subnet in a VPC. The instances access data in an Amazon S3 bucket in the same AWS Region. The VPC contains a NAT gateway in a public subnet to access the S3 bucket. The company wants to reduce costs by replacing the NAT gateway without compromising security or redundancy. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Replace the NAT gateway with a gateway VPC endpoint."
		],
		"wrongAnswersArray": [
			"Replace the NAT gateway with an AWS Direct Connect connection.",
			"Replace the NAT gateway with an internet gateway.",
			"Replace the NAT gateway with a NAT instance."
		]
	},
	{
		"question": "An entertainment company is using Amazon DynamoDB to store media metadata. The application is read intensive and experiencing delays. The company does not have staff to handle additional operational overhead and needs to improve the performance efficiency of DynamoDB without reconfiguring the application. What should a solutions architect recommend to meet this requirement?",
		"correctAnswersArray": [
			"Use Amazon DynamoDB Accelerator (DAX)"
		],
		"wrongAnswersArray": [
			"Replicate data by using DynamoDB global tables",
			"Use Amazon ElastiCache for Redis",
			"Use Amazon ElastiCache for Memcached with Auto Discovery enabled"
		]
	},
	{
		"question": "An Amazon EC2 instance is created in a new VPC's private subnet. Although this subnet lacks outward internet connectivity, the EC2 instance requires the ability to obtain monthly security updates from a third-party vendor. What actions should a solutions architect take to ensure that these criteria are met?",
		"correctAnswersArray": [
			"Create a NAT gateway, and place it in a public subnet. Configure the private subnet route table to use the NAT gateway as the default route."
		],
		"wrongAnswersArray": [
			"Create an internet gateway, and attach it to the VPC. Create a NAT instance, and place it in the same subnet where the EC2 instance is located. Configure the private subnet route table to use the internet gateway as the default route.",
			"Create a NAT instance, and place it in the same subnet where the EC2 instance is located. Configure the private subnet route table to use the NAT instance as the default route.",
			"Create an internet gateway, and attach it to the VPC. Configure the private subnet route table to use the internet gateway as the default route."
		]
	},
	{
		"question": "A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an application migration initiative. A solutions architect needs to share an Amazon Machine Image (AMI) from an existing AWS account with the MSP Partner's AWS account. The AMI is backed by Amazon Elastic Block Store (Amazon EBS) and uses a customer managed customer master key (CMK) to encrypt EBS volume snapshots. What is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?",
		"correctAnswersArray": [
			"Modify the LaunchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the CMK's key policy to allow the MSP Partner's AWS account to use the key."
		],
		"wrongAnswersArray": [
			"Modify the LaunchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the CMK's key policy to trust a new CMK that is owned by the MSP Partner for encryption.",
			"Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's AWS account. Encrypt the S3 bucket with a CMK that is owned by the MSP Partner. Copy and launch the AMI in the MSP Partner's AWS account.",
			"Make the encrypted AMI and snapshots publicly available. Modify the CMK's key policy to allow the MSP Partner's AWS account to use the key."
		]
	},
	{
		"question": "A company is developing a video conversion application hosted on AWS. The application will be available in two tiers a free tier and a paid tier. Users in the paid tier will have their videos converted first, and then the free tier users will have their videos converted. Which solution meets these requirements and is MOST cost-effective?",
		"correctAnswersArray": [
			"Two standard Amazon Simple Queue Service (Amazon SQS) queues with one for the paid tier and one for the free tier."
		],
		"wrongAnswersArray": [
			"A single FIFO Amazon Simple Queue Service (Amazon SQS) queue for all file types",
			"One FIFO queue for the paid tier and one standard queue for the free tier",
			"A single standard Amazon Simple Queue Service (Amazon SQS) queue for all file types"
		]
	},
	{
		"question": "A solutions architect finds that an Amazon Aurora cluster with On-Demand Instance pricing is being underutilized for a blog application. The application is used only for a few minutes several times each day for reads. What should a solutions architect do to optimize utilization MOST cost-effectively?",
		"correctAnswersArray": [
			"Convert the original Aurora database to Amazon Aurora Serverless."
		],
		"wrongAnswersArray": [
			"Enable Auto Scaling on the original Aurora database.",
			"Convert the original Aurora database to Aurora parallel query.",
			"Convert the original Aurora database to an Aurora global database."
		]
	},
	{
		"question": "A company has an on-premises data center that is running out of storage capacity. The company wants to migrate its storage infrastructure to AWS while minimizing bandwidth costs. The solution must allow for immediate retrieval of data at no additional cost. How can these requirements be met?",
		"correctAnswersArray": [
			"Deploy AWS Storage Gateway using cached volumes. Use Storage Gateway to store data in Amazon S3 while retaining copies of frequently accessed data subsets locally."
		],
		"wrongAnswersArray": [
			"Deploy AWS Storage Gateway using stored volumes to store data locally. Use Storage Gateway to asynchronously back up point-in-time snapshots of the data to Amazon S3.",
			"Deploy Amazon S3 Glacier Vault and enable expedited retrieval. Enable provisioned retrieval capacity for the workload.",
			"Deploy AWS Direct Connect to connect with the on-premises data center. Configure AWS Storage Gateway to store data locally. Use Storage Gateway to asynchronously back up point-in-time snapshots of the data to Amazon S3."
		]
	},
	{
		"question": "A company has an API-based inventory reporting application running on Amazon EC2 instances. The application stores information in an Amazon DynamoDB table. The company's distribution centers have an on-premises shipping application that calls an API to update the inventory before printing shipping labels. The company has been experiencing application interruptions several times each day, resulting in lost transactions. What should a solutions architect recommend to improve application resiliency?",
		"correctAnswersArray": [
			"Modify the application to send inventory updates using Amazon Simple Queue Service (Amazon SQS)."
		],
		"wrongAnswersArray": [
			"Modify the shipping application to write to a local database.",
			"Modify the application APIs to run serverless using AWS Lambda.",
			"Configure Amazon API Gateway to call the EC2 inventory application APIs."
		]
	},
	{
		"question": "For the last 15 years, a corporation has been operating a web application using an Oracle relational database in an on-premises data center. The company's database must be migrated to AWS. The organization need a way to cut operating costs without modifying the application's code. Which solution satisfies these criteria?",
		"correctAnswersArray": [
			"Use AWS Database Migration Service (AWS DMS) to migrate the database servers to Amazon RDS."
		],
		"wrongAnswersArray": [
			"Use an AWS Snowball Edge Storage Optimized device to migrate the data from Oracle to Amazon Aurora.",
			"Use AWS Database Migration Service (AWS DMS) to migrate the database servers to Amazon DynamoDB.",
			"Use Amazon EC2 instances to migrate and operate the database servers."
		]
	},
	{
		"question": "What should a solutions architect do to ensure that all objects uploaded to an Amazon S3 bucket are encrypted?",
		"correctAnswersArray": [
			"Update the bucket policy to deny if the PutObject does not have an x-amz-server-side-encryption header set."
		],
		"wrongAnswersArray": [
			"Update the bucket policy to deny if the PutObject does not have an s3x-amz-acl header set to private",
			"Update the bucket policy to deny if the PutObject does not have an s3x-amz-acl header set",
			"Update the bucket policy to deny if the PutObject does not have an awsSecureTransport header set to true."
		]
	},
	{
		"question": "A company's near-real-time streaming application is running on AWS. As the data is ingested, a job runs on the data and takes 30 minutes to complete. The workload frequently experiences high latency due to large amounts of incoming data. A solutions architect needs to design a scalable and serverless solution to enhance performance. Which combination of steps should the solutions architect take? (Select TWO.)",
		"correctAnswersArray": [
			"Use Amazon Kinesis Data Firehose to ingest the data."
		],
		"wrongAnswersArray": [
			"Use AWS Database Migration Service (AWS DMS) to ingest the data.",
			"Use Amazon EC2 instances in an Auto Scaling group to process the data.",
			"Use AWS Lambda with AWS Step Functions to process the data.",
			"Use AWS Fargate with Amazon Elastic Container Service (Amazon ECS) to process the data."
		]
	},
	{
		"question": "A business seeks to construct a scalable key management infrastructure to assist developers in encrypting data inside their apps. How might a solutions architect alleviate operational burdens?",
		"correctAnswersArray": [
			"Use AWS Key Management Service (AWS KMS) to protect the encryption keys."
		],
		"wrongAnswersArray": [
			"Use AWS Certificate Manager (ACM) to create, store, and assign the encryption keys.",
			"Use multi-factor authentication (MFA) to protect the encryption keys.",
			"Use an IAM policy to limit the scope of users who have access permissions to protect the encryption keys."
		]
	},
	{
		"question": "A business's data layer is powered by Amazon RDS for PostgreSQL databases. The organization must adopt database password rotation. Which option satisfies this criterion with the LEAST amount of operational overhead?",
		"correctAnswersArray": [
			"Store the password in AWS Secrets Manager. Enable automatic rotation on the secret."
		],
		"wrongAnswersArray": [
			"Store the password in AWS Systems Manager Parameter Store. Enable automatic rotation on the parameter.",
			"Store the password in AWS Key Management Service (AWS KMS). Enable automatic rotation on the customer master key (CMK).",
			"Store the password in AWS Systems Manager Parameter Store. Write an AWS Lambda function that rotates the password."
		]
	},
	{
		"question": "A company wants to replicate its data to AWS to recover in the event of a disaster. Today, a system administrator has scripts that copy data to a NFS share. Individual backup files need to be accessed with low latency by application administrators to deal with errors in processing. What should a solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Modify the script to copy data to an AWS Storage Gateway for File Gateway virtual appliance instead of the on-premises NFS share"
		],
		"wrongAnswersArray": [
			"Modify the script to copy data to an Amazon S3 bucket instead of the on-premises NFS share.",
			"Modify the script to copy data to an Amazon Elastic File System (Amazon EFS) volume instead of the on-premises NFS share",
			"Modify the script to copy data to an Amazon S3 Glacier Archive instead of the on-premises NFS share."
		]
	},
	{
		"question": "A business runs a multi-tier web application that stores data on an Amazon Aurora MySQL DB cluster. Amazon EC2 instances are used to host the application tier. The company's information technology security policies require that database credentials be encrypted and cycled every 14 days. What should a solutions architect do in order to satisfy this demand with the LEAST amount of operational work possible?",
		"correctAnswersArray": [
			"Create a new AWS Key Management Service (AWS KMS) encryption key. Use AWS Secrets Manager to create a new secret that uses the KMS key with the appropriate credentials. Associate the secret with the Aurora DB cluster. Configure a custom rotation period of 14 days"
		],
		"wrongAnswersArray": [
			"Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon S3 bucket that the application uses to load the credentials. Download the file to the application regularly to ensure that the correct credentials are used. Implement an AWS Lambda function that rotates the Aurora credentials every 14 days and uploads these credentials to the file in the S3 bucket",
			"Create two parameters in AWS Systems Manager Parameter Store one for the user name as a string parameter and one that uses the SecureString type for the password. Select AWS Key Management Service (AWS KMS) encryption for the password parameter, and load these parameters in the application tier. Implement an AWS Lambda function that rotates the password every 14 days",
			"Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system in all EC2 instances of the application tier. Restrict the access to the file on the file system so that the application can read the file and that only super users can modify the file. Implement an AWS Lambda function that rotates the key in Aurora every 14 days and writes new credentials into the file"
		]
	},
	{
		"question": "A company wants to build an immutable infrastructure for its software applications. The company wants to test the software applications before sending traffic to them. The company seeks an efficient solution that limits the effects of application bugs. Which combination of steps should a solutions architect recommend? (Select TWO.)",
		"correctAnswersArray": [
			"Apply Amazon Route 53 weighted routing to test the staging environment and gradually increase the traffic as the tests pass."
		],
		"wrongAnswersArray": [
			"Use AWS CloudFormation to update the production infrastructure and roll back the stack if the update fails.",
			"Use AWS CloudFormation with a parameter set to the staging value in a separate environment other than the production environment.",
			"Apply Amazon Route 53 failover routing to test the staging environment and fail over to the production environment if the tests pass.",
			"Use AWS CloudFormation to deploy the staging environment with a snapshot deletion policy and reuse the resources in the production environment if the tests pass."
		]
	},
	{
		"question": "A company is migrating its applications to AWS. Currently, applications that run on premises generate hundreds of terabytes of data that is stored on a shared file system. The company is running an analytics application in the cloud that runs hourly to generate insights from this data. The company needs a solution to handle the ongoing data transfer between the on-premises shared file system and Amazon S3. The solution also must be able to handle occasional interruptions in internet connectivity. Which solution should the company use for the data transfer to meet these requirements?",
		"correctAnswersArray": [
			"AWS DataSync"
		],
		"wrongAnswersArray": [
			"AWS Transfer for SFTP",
			"AWS Migration Hub",
			"AWS Snowball Edge Storage Optimized"
		]
	},
	{
		"question": "A company wants to use a custom distributed application that calculates various profit and loss scenarios. To achieve this goal, the company needs to provide a network connection between its Amazon EC2 instances. The connection must minimize latency and must maximize throughput. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Configure a placement group for EC2 instances that have the same instance type."
		],
		"wrongAnswersArray": [
			"Configure AWS PrivateLink for the EC2 instances.",
			"Use multiple AWS elastic network interfaces and link aggregation.",
			"Provision the application to use EC2 Dedicated Hosts of the same instance type."
		]
	},
	{
		"question": "A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations. Which solution meets these requirements with the LEAST amount of operational overhead?",
		"correctAnswersArray": [
			"Add the awsPrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy."
		],
		"wrongAnswersArray": [
			"Tag each user that needs access to the S3 bucket. Add the awsPrincipalTag global condition key to the S3 bucket policy.",
			"Create an organizational unit (OU) for each department. Add the awsPrincipalOrgPaths global condition key to the S3 bucket policy.",
			"Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly."
		]
	},
	{
		"question": "A company has migrated several applications to AWS in the past 3 months. The company wants to know the breakdown of costs for each of these applications. The company wants to receive a regular report that includes this information. Which solution will meet these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Tag all the AWS resources with a key for cost and a value of the application's name. Activate cost allocation tags. Use Cost Explorer to get the desired information."
		],
		"wrongAnswersArray": [
			"Load AWS Cost and Usage Reports into an Amazon RDS DB instance. Run SQL queries to get the desired information.",
			"Use AWS Budgets to download data for the past 3 months into a .CSV file. Look up the desired information.",
			"Tag all the AWS resources with a key for cost and a value of the application's name. Use the AWS Billing and Cost Management console to download bills for the past 3 months. Look up the desired Information."
		]
	},
	{
		"question": "A user wants to list the IAM role that is attached to their Amazon EC2 instance. The user has login access to the EC2 instance but does not have IAM permissions. What should a solutions architect do to retrieve this information?",
		"correctAnswersArray": [
			"Run the following EC2 command curl http//169.254.169.254/latest/meta-data/iam/info"
		],
		"wrongAnswersArray": [
			"Run the following AWS CLI command aws iam get-instance-profile --instance-profile-name ExampleInstanceProfile",
			"Run the following EC2 command curl http//169.254.169.254/latest/user-data/iam/info",
			"Run the following EC2 command http //169.254.169.254/latest/dynamic/instance-identity/"
		]
	},
	{
		"question": "A company allows its developers to attach existing IAM policies to existing IAM roles to enable faster experimentation and agility. However, the security operations team is concerned that the developers could attach the existing administrator policy, which would allow the developers to circumvent any other security policies. How should a solutions architect address this issue?",
		"correctAnswersArray": [
			"Set an IAM permissions boundary on the developer IAM role that explicitly denies attaching the administrator policy."
		],
		"wrongAnswersArray": [
			"Use service control policies to disable IAM activity across all accounts in the organizational unit.",
			"Prevent the developers from attaching any policies and assign all IAM duties to the security operations team.",
			"Create an Amazon SNS topic to send an alert every time a developer creates a new policy."
		]
	},
	{
		"question": "An ecommerce company is running a multi-tier application on AWS. The front-end and backend tiers both run on Amazon EC2, and the database runs on Amazon RDS for MySQL. The backend tier communicates with the RDS instance. There are frequent calls to return identical datasets from the database that are causing performance slowdowns. Which action should be taken to improve the performance of the backend?",
		"correctAnswersArray": [
			"Implement Amazon ElastiCache to cache the large datasets."
		],
		"wrongAnswersArray": [
			"Implement an RDS for MySQL read replica to cache database calls.",
			"Implement Amazon Kinesis Data Firehose to stream the calls to the database.",
			"Implement Amazon SNS to store the database calls"
		]
	},
	{
		"question": "A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes. What should a solutions architect do to accomplish this goal?",
		"correctAnswersArray": [
			"Turn on AWS Config with the appropriate rules"
		],
		"wrongAnswersArray": [
			"Turn on Amazon Inspector with the appropriate assessment template.",
			"Turn on AWS Trusted Advisor with the appropriate checks.",
			"Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon CloudWatch Events)."
		]
	},
	{
		"question": "A company has a remote factory that has unreliable connectivity. The factory needs to gather and process machine data and sensor data so that it can sense products on its conveyor belts and initiate a robotic movement to direct the products to the right location. Predictable low-latency compute processing is essential for the on-premises control systems. Which solution should the factory use to process the data?",
		"correctAnswersArray": [
			"An Amazon EC2 instance that has enhanced networking enabled"
		],
		"wrongAnswersArray": [
			"An Amazon Elastic Block Store (Amazon EBS) volume on an AWS Snowball Edge cluster",
			"An Amazon EC2 instance that uses an AWS Global Accelerator endpoint",
			"Amazon CloudFront Lambda@Edge functions"
		]
	},
	{
		"question": "A company has applications that run on Amazon EC2 instances in a VPC. One of the applications needs to call the Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the applications is allowed to travel across the internet. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Configure an S3 gateway endpoint."
		],
		"wrongAnswersArray": [
			"Create an S3 bucket in the same AWS Region as the EC2 instances.",
			"Configure a NAT gateway in the same subnet as the EC2 instances.",
			"Create an S3 bucket in a private subnet."
		]
	},
	{
		"question": "A disaster response team is using drones to collect images of recent storm damage. The response team's laptops lack the storage and compute capacity to transfer the images and process the data. While the team has Amazon EC2 instances for processing and Amazon S3 buckets for storage, network connectivity is intermittent and unreliable. The images need to be processed to evaluate the damage. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use AWS Snowball Edge devices to process and store the images."
		],
		"wrongAnswersArray": [
			"Configure Amazon Kinesis Data Firehose to create multiple delivery streams aimed separately at the S3 buckets for storage and the EC2 instances for processing the images.",
			"Use AWS Storage Gateway pre-installed on a hardware appliance to cache the images locally for Amazon S3 to process the images when connectivity becomes available.",
			"Upload the images to Amazon Simple Queue Service (Amazon SQS) during intermittent connectivity to EC2 instances."
		]
	},
	{
		"question": "A healthcare company stores highly sensitive patient records. Compliance requires that multiple copies be stored in different locations. Each record must be stored for 7 years. The company has a service level agreement (SLA) to provide records to government agencies immediately for the first 30 days and then within 4 hours of a request thereafter. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use Amazon S3 with cross-Region replication enabled. After 30 days, transition the data to Amazon S3 Glacier using a lifecycle policy."
		],
		"wrongAnswersArray": [
			"Use Amazon S3 with cross-origin resource sharing (CORS) enabled. After 30 days, transition the data to Amazon S3 Glacier using a lifecycle policy.",
			"Use Amazon S3 with cross-origin resource sharing (CORS) enabled. After 30 days, transition the data to Amazon S3 Glacier Deep Archive using a lifecycle policy.",
			"Use Amazon S3 with cross-Region replication enabled. After 30 days, transition the data to Amazon S3 Glacier Deep Archive using a lifecycle policy."
		]
	},
	{
		"question": "A company's web application uses an Amazon RDS PostgreSQL DB instance to store its application data. During the financial closing period at the start of every month, Accountants run large queries that impact the database's performance due to high usage. The company wants to minimize the impact that the reporting activity has on the web application. What should a solutions architect do to reduce the impact on the database with the LEAST amount of effort?",
		"correctAnswersArray": [
			"Create a read replica and direct reporting traffic to the replica."
		],
		"wrongAnswersArray": [
			"Create a Multi-AZ database and direct reporting traffic to the standby.",
			"Create a cross-Region read replica and direct reporting traffic to the replica.",
			"Create an Amazon Redshift database and direct reporting traffic to the Amazon Redshift database."
		]
	},
	{
		"question": "A company's order fulfillment service uses a MySQL database. The database needs to support a large number of concurrent queries and transactions. Developers are spending time patching and tuning the database. This is causing delays in releasing new product features. The company wants to use cloud-based services to help address this new challenge. The solution must allow the developers to migrate the database with little or no code changes and must optimize performance. Which service should a solutions architect use to meet these requirements?",
		"correctAnswersArray": [
			"Amazon Aurora"
		],
		"wrongAnswersArray": [
			"Amazon DynamoDB",
			"MySQL on Amazon EC2",
			"Amazon ElastiCache"
		]
	},
	{
		"question": "A company needs to run its external website on Amazon EC2 instances and on-premises virtualized servers. The AWS environment has a 1 GB AWS Direct Connect connection to the data center. The application has IP addresses that will not change. The on-premises and AWS servers are able to restart themselves while maintaining the same IP address if a failure occurs. Some website users have to add their vendors to an allow list, so the solution must have a fixed IP address. The company needs a solution with the lowest operational overhead to handle this split traffic. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Deploy an Amazon Route 53 Resolver with rules pointing to the on-premises and AWS IP addresses."
		],
		"wrongAnswersArray": [
			"Deploy an Application Load Balancer on AWS. Register the on-premises and AWS IP addresses with the target group.",
			"Deploy Amazon API Gateway to direct traffic to the on-premises and AWS IP addresses based on the header of the request.",
			"Deploy a Network Load Balancer on AWS. Create target groups for the on-premises and AWS IP addresses."
		]
	},
	{
		"question": "A company runs an on-premises application. The company is planning to move the application to containers by using Kubernetes. The company wants to migrate the application to AWS to reduce the overhead of container infrastructure management. A solutions architect must configure the environment to allow deployment of the company's own custom Amazon Machine Image (AMI) to nodes. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Use AWS Fargate on Amazon Elastic Kubernetes Service (Amazon EKS). Store container images in Amazon Elastic Container Registry (Amazon ECR)."
		],
		"wrongAnswersArray": [
			"Use Amazon Elastic Kubernetes Service (Amazon EKS) with managed worker nodes. Store container images in Amazon Elastic Container Registry (Amazon ECR).",
			"Provision a Kubernetes cluster on Amazon EC2. Store container images in Docker Hub.",
			"Use Amazon Elastic Kubernetes Service (Amazon EKS) with self-managed worker nodes. Store container images in an image repository that runs on Amazon EC2."
		]
	},
	{
		"question": "A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC. The EC2 instances run inside several subnets across multiple Availability Zones. The EC2 instances do not communicate with each other. However, the EC2 instances download images from Amazon S3 and upload images to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges. What is the MOST cost-effective way for the company to avoid Regional data transfer charges?",
		"correctAnswersArray": [
			"Deploy a gateway VPC endpoint for Amazon S3."
		],
		"wrongAnswersArray": [
			"Provision an EC2 Dedicated Host to run the EC2 instances.",
			"Replace the NAT gateway with a NAT instance.",
			"Launch the NAT gateway in each Availability Zone."
		]
	},
	{
		"question": "A company processes images into thumbnails and returns an email confirmation to the end user upon completion. The company's existing solution is facing performance bottlenecks and scalability issues. The company wants to migrate this process to AWS and implement a solution that requires the least possible configuration. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use Amazon S3 to store images and send notifications to AWS Lambda. Configure an AWS Lambda function to process the images into thumbnails, store the thumbnails in Amazon S3, and send an email confirmation through Amazon Simple Email Service (Amazon SES)."
		],
		"wrongAnswersArray": [
			"Use Amazon S3 to store images and send notifications to Amazon Simple Queue Service (Amazon SQS). Configure an Amazon EC2 instance to poll the SQS queue to process the images into thumbnails, store the thumbnails in Amazon S3, and send an email confirmation through Amazon Simple Email Service (Amazon SES).",
			"Use Amazon S3 to store images and send notifications to Amazon Simple Notification Service (Amazon SNS). Configure Amazon SNS to invoke an AWS Lambda function to process the images into thumbnails, store the thumbnails in Amazon S3, and send an email confirmation through Amazon Simple Email Service (Amazon SES).",
			"Use Amazon S3 to store images and send notifications to Amazon Simple Queue Service (Amazon SQS). Configure an AWS Lambda function to retrieve the messages from the SQS queue, process the images into thumbnails, store the thumbnails in Amazon S3, and send an email confirmation through Amazon Simple Email Service (Amazon SES)."
		]
	},
	{
		"question": "A company's production application runs online transaction processing (OLTP) transactions on an Amazon RDS MySQL DB instance. The company is launching a new reporting tool that will access the same data. The reporting tool must be highly available and not impact the performance of the production application. How can this be achieved?",
		"correctAnswersArray": [
			"Create a Multi-AZ RDS Read Replica of the production RDS DB instance."
		],
		"wrongAnswersArray": [
			"Create hourly snapshots of the production RDS DB instance",
			"Create a Single-AZ RDS Read Replica of the production RDS DB instance. Create a second Single-AZ RDS Read Replica from the replica.",
			"Create multiple RDS Read Replicas of the production RDS DB instance. Place the Read Replicas in an Auto Scaling group."
		]
	},
	{
		"question": "A company wants to move its on-premises network attached storage (NAS) to AWS. The company wants to make the data available to any Linux instances within its VPC and ensure changes are automatically synchronized across all instances accessing the data store. The majority of the data is accessed very rarely, and some files are accessed by multiple users at the same time. Which solution meets these requirements and is MOST cost-effective?",
		"correctAnswersArray": [
			"Create an Amazon Elastic File System (Amazon EFS) file system within the VPC. Set the lifecycle policy to transition the data to EFS Infrequent Access (EFS IA) after the appropriate number of days."
		],
		"wrongAnswersArray": [
			"Create an Amazon S3 bucket that has a lifecycle policy set to transition the data to S3 Standard-Infrequent Access (S3 Standard-IA) after the appropriate number of days",
			"Create an Amazon Elastic File System (Amazon EFS) file system within the VPC. Set the throughput mode to Provisioned and to the required amount of IOPS to support concurrent usage.",
			"Create an Amazon Elastic Block Store (Amazon EBS) snapshot containing the data. Share it with users within the VPC."
		]
	},
	{
		"question": "A company has created a multi-tier application for its ecommerce website. The website uses an Application Load Balancer that resides in the public subnets, a web tier in the public subnets, and a MySQL cluster hosted on Amazon EC2 instances in the private subnets. The MySQL database needs to retrieve product catalog and pricing information that is hosted on the internet by a third-party provider. A solutions architect must devise a strategy that maximizes security without increasing operational overhead. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Deploy a NAT gateway in the public subnets. Modify the private subnet route table to direct all internet-bound traffic to the NAT gateway."
		],
		"wrongAnswersArray": [
			"Deploy a NAT instance in the VPC. Route all the internet-based traffic through the NAT instance.",
			"Configure an internet gateway and attach it to the VPC. Modify the private subnet route table to direct internet-bound traffic to the internet gateway.",
			"Configure a virtual private gateway and attach it to the VPC. Modify the private subnet route table to direct internet-bound traffic to the virtual private gateway."
		]
	},
	{
		"question": "A company is using an Application Load Balancer (ALB) to present its application to the internet. The company finds abnormal traffic access patterns across the application. A solutions architect needs to improve visibility into the infrastructure to help the company understand these abnormalities better. What is the MOST operationally efficient solution that meets these requirements?",
		"correctAnswersArray": [
			"Enable ALB access logging to Amazon S3. Create a table in Amazon Athena, and query the logs."
		],
		"wrongAnswersArray": [
			"Use Amazon EMR on a dedicated Amazon EC2 instance to directly query the ALB to acquire traffic access log Information.",
			"Enable ALB access logging to Amazon S3. Open each file in a text editor, and search each line for the relevant information.",
			"Create a table in Amazon Athena for AWS CloudTrail logs. Create a query for the relevant information."
		]
	},
	{
		"question": "A company's security team requests that network traffic be captured in VPC Flow Logs. The logs will be frequently accessed for 90 days and then accessed intermittently. What should a solutions architect do to meet these requirements when configuring the logs?",
		"correctAnswersArray": [
			"Use Amazon S3 as the target. Enable an S3 Lifecycle policy to transition the logs to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days."
		],
		"wrongAnswersArray": [
			"Use Amazon Kinesis as the target. Configure the Kinesis stream to always retain the logs for 90 days.",
			"Use AWS CloudTrail as the target. Configure CloudTrail to save to an Amazon S3 bucket, and enable S3 Intelligent-Tiering.",
			"Use Amazon CloudWatch as the target. Set the CloudWatch log group with an expiration of 90 days."
		]
	},
	{
		"question": "A company is hosting 60 TB of production-level data in an Amazon S3 bucket. A solutions architect needs to bring that data on premises for quarterly audit requirements. This export of data must be encrypted while in transit. The company has low network bandwidth in place between AWS and its on-premises data center. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Deploy an AWS Snowball device in the on-premises data center after completing an export job request in the AWS Snowball console."
		],
		"wrongAnswersArray": [
			"Deploy an AWS Storage Gateway volume gateway on AWS. Enable a 90-day replication window to transfer the data.",
			"Deploy AWS Migration Hub with 90-day replication windows for data transfer.",
			"Deploy Amazon Elastic File System (Amazon EFS), with lifecycle policies enabled, on AWS. Use it to transfer the data."
		]
	},
	{
		"question": "A company uses GPS trackers to document the migration patterns of thousands of sea turtles. The trackers check every 5 minutes to see if a turtle has moved more than 100 yards (91.4 meters). If a turtle has moved, its tracker sends the new coordinates to a web application running on three Amazon EC2 instances that are in multiple Availability Zones in one AWS Region. Recently, the web application was overwhelmed while processing an unexpected volume of tracker data. Data was lost with no way to replay the events. A solutions architect must prevent this problem from happening again and needs a solution with the least operational overhead. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create an Amazon API Gateway endpoint to handle transmitted location coordinates. Use an AWS Lambda function to process each item concurrently."
		],
		"wrongAnswersArray": [
			"Create an Amazon S3 bucket to store the data. Configure the application to scan for new data in the bucket for processing.",
			"Create an Amazon Simple Queue Service (Amazon SQS) queue to store the incoming data. Configure the application to poll for new messages for processing.",
			"Create an Amazon DynamoDB table to store transmitted location coordinates. Configure the application to query the table for new data for processing. Use TTL to remove data that has been processed."
		]
	},
	{
		"question": "A company is running a web-based game in two Availability Zones in the us-west-2 Region. The web servers use an Application Load Balancer (ALB) in public subnets. The ALB has an SSL certificate from AWS Certificate Manager (ACM) with a custom domain name. The game is written in JavaScript and runs entirely in a user's web browser. The game is increasing in popularity in many countries around the world. The company wants to update the application architecture and optimize costs without compromising performance. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon S3 and create an S3 bucket in us-west-2. Deploy the HTML and JavaScript files to the S3 bucket. Use Amazon CloudFront and create a global distribution with the S3 bucket as the origin. Use ACM to create a new certificate for the distribution. Use Amazon Route 53 to update the application alias to point to the distribution."
		],
		"wrongAnswersArray": [
			"Use Amazon S3 and create an S3 bucket in AWS Regions near countries where the game is popular. Deploy the HTML and JavaScript files to each S3 bucket. Use ACM to create a new certificate for each S3 bucket. Use Amazon Route 53 with a geolocation routing policy to direct traffic to the local S3 bucket.",
			"Use Amazon CloudFront and create a global distribution that points to the ALB. Reuse the existing certificate from ACM for the CloudFront distribution. Use Amazon Route 53 to update the application alias to point to the distribution.",
			"Use AWS CloudFormation to deploy the application stack to AWS Regions near countries where the game is popular. Use ACM to create a new certificate for each application instance. Use Amazon Route 53 with a geolocation routing policy to direct traffic to the local application instance."
		]
	},
	{
		"question": "A company is planning to migrate its virtual server-based workloads to AWS. The company has internet-facing load balancers backed by application servers. The application servers rely on patches from an internet-hosted repository. Which services should a solutions architect recommend be hosted on the public subnet? (Select TWO.)",
		"correctAnswersArray": [
			"Application Load Balancers",
			"NAT gateway"
		],
		"wrongAnswersArray": [
			"Amazon RDS DB instances",
			"Amazon Elastic File System (Amazon EFS) volumes",
			"Amazon EC2 application servers",
		]
	},
	{
		"question": "A company asks a solutions architect to design a new network architecture for its on-premises applications. The company has five application VPCs. Each application VPC supports a different application. All the application VPCs need to reach a shared services VPC for enterprise services. The application VPCs need to communicate with each other. The number of VPCs will increase as the company grows. The company needs a solution that minimizes operational overhead during setup and maintenance. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use AWS Transit Gateway to connect the shared services VPC to each of the application VPCs. Configure routing to allow the application VPCs to access the shared services network."
		],
		"wrongAnswersArray": [
			"Use VPC endpoint services from the application VPCs to reach services on the shared services VPC.",
			"Use a virtual private gateway and VPNs in each application VPC to reach the company network. Transfer the network traffic between the application VPCs by using dynamic routing to the on-premises Network.",
			"Use VPC peering connections between the application VPCs and the shared services VPC. Add a peering connection and routes between the application VPCs as needed."
		]
	},
	{
		"question": "A company is building applications in containers. The company wants to migrate its on-premises development and operations services from its on-premises data center to AWS. Management states that production systems must be cloud agnostic and use the same configuration and administrative tools across all production systems. A solutions architect needs to design a managed solution that will align with open-source software. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Launch the containers on Amazon Elastic Kubernetes Service (Amazon EKS) and EKS worker nodes."
		],
		"wrongAnswersArray": [
			"Launch the containers on Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 instance worker nodes.",
			"Launch the containers on Amazon EC2 with EC2 instance worker nodes.",
			"Launch the containers on Amazon Elastic Container Service (Amazon ECS) with AWS Fargate instances."
		]
	},
	{
		"question": "A company's facility has badge readers at every entrance throughout the building. When badges are scanned, the readers send a message over HTTPS to indicate who attempted to access that particular entrance. A solutions architect must design a system to process these messages from the sensors. The solution must be highly available, and the results must be made available for the company's security team to analyze. Which system architecture should the solutions architect recommend?",
		"correctAnswersArray": [
			"Create an HTTPS endpoint in Amazon API Gateway. Configure the API Gateway endpoint to invoke an AWS Lambda function to process the messages and save the results to an Amazon DynamoDB table."
		],
		"wrongAnswersArray": [
			"Launch an Amazon EC2 instance to serve as the HTTPS endpoint and to process the messages. Configure the EC2 instance to save the results to an Amazon S3 bucket.",
			"Create a gateway VPC endpoint for Amazon S3. Configure a Site-to-Site VPN connection from the facility network to the VPC so that sensor data can be written directly to an S3 bucket by way of the VPC endpoint.",
			"Use Amazon Route 53 to direct incoming sensor messages to an AWS Lambda function. Configure the Lambda function to process the messages and save the results to an Amazon DynamoDB table."
		]
	},
	{
		"question": "A company serves a multilingual website from a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). This architecture is currently running in the us-west-1 Region but is exhibiting high request latency for users located in other parts of the world. The website needs to serve requests quickly and efficiently regardless of a user's location. However, the company does not want to recreate the existing architecture across multiple Regions. How should a solutions architect accomplish this?",
		"correctAnswersArray": [
			"Configure an Amazon CloudFront distribution with the ALB as the origin. Set the cache behavior settings to only cache based on the Accept-Language request header."
		],
		"wrongAnswersArray": [
			"Replace the existing architecture with a website served from an Amazon S3 bucket. Configure an Amazon CloudFront distribution with the S3 bucket as the origin.",
			"Set up Amazon API Gateway with the ALB as an integration. Configure API Gateway to use an HTTP integration type. Set up an API Gateway stage to enable the API cache.",
			"Launch an EC2 instance in each additional Region and configure NGINX to act as a cache server for that Region. Put all the instances plus the ALB behind an Amazon Route 53 record set with a geolocation routing policy."
		]
	},
	{
		"question": "A company is running a web application on Amazon EC2 instances in an Auto Scaling group. The application uses a database that runs on an Amazon RDS for PostgreSQL DB instance. The application performs slowly as traffic increases, and the database experiences a heavy read load during periods of high traffic. Which actions should a solutions architect take to resolve these performance issues? (Select TWO.)",
		"correctAnswersArray": [
			"Create a read replica for the DB instance. Configure the application to send read traffic to the read replica.",
			"Create an Amazon ElastiCache cluster. Configure the application to cache query results in the ElastiCache cluster."
		],
		"wrongAnswersArray": [
			"Configure the Auto Scaling group subnets to ensure that the EC2 instances are provisioned in the same Availability Zone as the DB instance.",
			"Enable auto scaling for the DB instance.",
			"Enable Multi-AZ for the DB instance. Configure the application to send read traffic to the standby DB instance"
		]
	},
	{
		"question": "A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images. Which method is the MOST cost-effective for hosting the website?",
		"correctAnswersArray": [
			"Create an Amazon S3 bucket and host the website there."
		],
		"wrongAnswersArray": [
			"Deploy a web server on an Amazon EC2 instance to host the website.",
			"Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js Framework.",
			"Containerize the website and host it in AWS Fargate."
		]
	},
	{
		"question": "A solutions architect plans to convert a company's monolithic web application into a multi-tier application. The company wants to avoid managing its own infrastructure. The minimum requirements for the web application are high availability, scalability, and regional low latency during peak hours. The solution should also store and retrieve data with millisecond latency using the application's API. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use Amazon API Gateway with an edge-optimized API endpoint, AWS Lambda for compute, and Amazon DynamoDB as the data store."
		],
		"wrongAnswersArray": [
			"Use an Amazon Route 53 routing policy with geolocation that points to an Amazon S3 bucket with static website hosting and Amazon DynamoDB as the data store.",
			"Use AWS Fargate to host the web application with backend Amazon RDS Multi-AZ DB instances",
			"Use an Amazon CloudFront distribution that points to an Elastic Load Balancer with an Amazon EC2 Auto Scaling group, along with Amazon RDS Multi-AZ DB instances"
		]
	},
	{
		"question": "A company has a service that produces event data. The company wants to use AWS to process the event data it is as received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead. How should a solutions architect accomplish this?",
		"correctAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue"
		],
		"wrongAnswersArray": [
			"Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.",
			"Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.",
			"Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a Subscriber."
		]
	},
	{
		"question": "A company uses Amazon S3 as its object storage solution. The company has thousands of S3 buckets it uses to store data. Some of the S3 buckets have data that is accessed less frequently than others. A solutions architect found that lifecycle policies are not consistently implemented or are implemented partially, resulting in data being stored in high-cost storage. Which solution will lower costs without compromising the availability of objects?",
		"correctAnswersArray": [
			"Use S3 Intelligent-Tiering storage."
		],
		"wrongAnswersArray": [
			"Use S3 One Zone-Infrequent Access (S3 One Zone-IA)",
			"Use Amazon Elastic Block Store (Amazon EBS) automated snapshots",
			"Use S3 ACLs."
		]
	},
	{
		"question": "A solutions architect is designing a workload that will store hourly energy consumption by business tenants in a building. The sensors will feed a database through HTTP requests that will add up usage for each tenant. The solutions architect must use managed services when possible. The workload will receive more features in the future as the solutions architect adds independent components. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Use Amazon API Gateway with AWS Lambda functions to receive the data from the sensors, process the data, and store the data in an Amazon DynamoDB table."
		],
		"wrongAnswersArray": [
			"Use an Elastic Load Balancer that is supported by an Auto Scaling group of Amazon EC2 instances to receive and process the data from the sensors. Use an Amazon Elastic File System (Amazon EFS) shared file system to store the processed data.",
			"Use Amazon API Gateway with AWS Lambda functions to receive the data from the sensors, process the data, and store the data in a Microsoft SQL Server Express database on an Amazon EC2 instance.",
			"Use an Elastic Load Balancer that is supported by an Auto Scaling group of Amazon EC2 instances to receive and process the data from the sensors. Use an Amazon S3 bucket to store the processed data."
		]
	},
	{
		"question": "A company wants to run a gaming application on Amazon EC2 instances that are part of an Auto Scaling group in the AWS Cloud. The application will transmit data by using UDP packets. The company wants to ensure that the application can scale out and in as traffic increases and decreases. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Attach a Network Load Balancer to the Auto Scaling group."
		],
		"wrongAnswersArray": [
			"Attach an Application Load Balancer to the Auto Scaling group",
			"Deploy an Amazon Route 53 record set with a weighted policy to route traffic appropriately.",
			"Deploy a NAT instance that is configured with port forwarding to the EC2 instances in the Auto Scaling group."
		]
	},
	{
		"question": "A company has an application workflow that uses an AWS Lambda function to download and decrypt files from Amazon S3. These files are encrypted using AWS Key Management Service Customer Master Keys (AWS KMS CMKs). A solutions architect needs to design a solution that will ensure the required permissions are set correctly. Which combination of actions accomplish this? (Select TWO.)",
		"correctAnswersArray": [
			"Grant the decrypt permission for the Lambda IAM role in the KMS key's policy.",
			"Create a new IAM role with the kms decrypt permission and attach the execution role to the Lambda function."
		],
		"wrongAnswersArray": [
			"Create a new IAM policy with the kms decrypt permission and attach the policy to the Lambda function.",
			"Attach the kms decrypt permission to the Lambda function's resource policy.",
			"Grant the decrypt permission for the Lambda resource policy in the KMS key's policy"
		]
	},
	{
		"question": "A solutions architect is designing a multi-tier application for a company. The application's users upload images from a mobile device. The application generates a thumbnail of each image and returns a message to the user to confirm that the image was uploaded successfully. The thumbnail generation can take up to 60 seconds, but the company wants to provide a faster response time to its users to notify them that the original image was received. The solutions architect must design the application to asynchronously dispatch requests to the different application tiers. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) message queue. As images are uploaded, place a message on the SQS queue for thumbnail generation. Alert the user through an application message that the image was received."
		],
		"wrongAnswersArray": [
			"Write a custom AWS Lambda function to generate the thumbnail and alert the user. Use the image upload process as an event source to invoke the Lambda function.",
			"Create Amazon Simple Notification Service (Amazon SNS) notification topics and subscriptions. Use one subscription with the application to generate the thumbnail after the image upload is complete. Use a second subscription to message the user's mobile app by way of a push notification after thumbnail generation is complete.",
			"Create an AWS Step Functions workflow. Configure Step Functions to handle the orchestration between the application tiers and alert the user when thumbnail generation is complete."
		]
	},
	{
		"question": "A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour. What should the solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time."
		],
		"wrongAnswersArray": [
			"Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot.",
			"Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.",
			"Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB."
		]
	},
	{
		"question": "A company hosts a multi-tier web application that uses an Amazon Aurora MySQL DB cluster for storage. The application tier is hosted on Amazon EC2 instances. The company's IT security guidelines mandate that the database credentials be encrypted and rotated every 14 days. What should a solutions architect do to meet this requirement with the LEAST operational effort?",
		"correctAnswersArray": [
			"Create a new AWS Key Management Service (AWS KMS) encryption key. Use AWS Secrets Manager to create a new secret that uses the KMS key with the appropriate credentials. Associate the secret with the Aurora DB cluster. Configure a custom rotation period of 14 days."
		],
		"wrongAnswersArray": [
			"Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon S3 bucket that the application uses to load the credentials. Download the file to the application regularly to ensure that the correct credentials are used. Implement an AWS Lambda function that rotates the Aurora credentials every 14 days and uploads these credentials to the file in the S3 bucket.",
			"Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system in all EC2 instances of the application tier. Restrict the access to the file on the file system so that the application can read the file and that only super users can modify the file. Implement an AWS Lambda function that rotates the key in Aurora every 14 days and writes new credentials into the file.",
			"Create two parameters in AWS Systems Manager Parameter Store one for the user name as a string parameter and one that uses the SecureString type for the password. Select AWS Key Management Service (AWS KMS) encryption for the password parameter, and load these parameters in the application tier. Implement an AWS Lambda function that rotates the password every 14 days."
		]
	},
	{
		"question": "A company has an application in which users create a large number of files. The company plans to migrate the application from its on-premises data center to AWS. Currently, the application uploads the files to a shared storage system. A separate fleet of servers then processes the files. Access to the files is controlled through Linux file system permissions. The company needs to migrate the fleet of servers to Amazon EC2 instances. The company must maximize storage scalability and durability without changing the code of the existing application. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Migrate the files to an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on the EC2 Instances."
		],
		"wrongAnswersArray": [
			"Migrate the files to a set of Amazon Elastic Block Store (Amazon EBS) volumes. Mount the EBS volumes on the EC2 instances.",
			"Migrate the files to an Amazon S3 bucket. Mount the S3 bucket on the EC2 instances.",
			"Migrate the files to a set of Amazon EC2 instance store volumes. Mount the instance store volumes on the EC2 instances."
		]
	},
	{
		"question": "A company recently launched a new service that involves medical images. The company scans the images and sends them from its on-premises data center through an AWS Direct Connect connection to Amazon EC2 instances. After processing is complete, the images are stored in an Amazon S3 bucket. A company requirement states that the EC2 instances cannot be accessible through the internet. The EC2 instances run in a private subnet, which has a default route back to the on-premises data center for outbound internet access. Usage of the new service is increasing rapidly. A solutions architect must recommend a solution that meets the company's requirements and reduces the Direct Connect charges. Which solution accomplishes these goals MOST cost-effectively?",
		"correctAnswersArray": [
			"Configure a VPC endpoint for Amazon S3. Add an entry to the private subnet's route table for the S3 endpoint."
		],
		"wrongAnswersArray": [
			"Configure Amazon S3 as a file system mount point on the EC2 instances. Access Amazon S3 through the mount.",
			"Move the EC2 instances into a public subnet. Configure the public subnet route table to point to an internet gateway.",
			"Configure a NAT gateway in a public subnet. Configure the private subnet's route table to use the NAT gateway."
		]
	},
	{
		"question": "A company serves content to its subscribers across the world using an application running on AWS. The application has several Amazon EC2 instances in a private subnet behind an Application Load Balancer (ALB). Due to a recent change in copyright restrictions, the chief information officer (CIO) wants to block access for certain countries. Which action will meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon CloudFront to serve the application and deny access to blocked countries."
		],
		"wrongAnswersArray": [
			"Use ALB listener rules to return access denied responses to incoming traffic from blocked countries.",
			"Modify the ALB security group to deny incoming traffic from blocked countries.",
			"Modify the security group for EC2 instances to deny incoming traffic from blocked countries."
		]
	},
	{
		"question": "A company's application is running on Amazon EC2 instances in a single Region. In the event of a disaster, a solutions architect needs to ensure that the resources can also be deployed to a second Region. Which combination of actions should the solutions architect take to accomplish this? (Select TWO.)",
		"correctAnswersArray": [
			"Launch a new EC2 instance from an Amazon Machine Image (AMI) in a new Region.",
			"Copy an Amazon Machine Image (AMI) of an EC2 instance and specify a different Region for the destination."
		],
		"wrongAnswersArray": [
			"Detach a volume on an EC2 instance and copy it to Amazon S3.",
			"Launch a new EC2 instance in a new Region and copy a volume from Amazon S3 to the new instance.",
			"Copy an Amazon Elastic Block Store (Amazon EBS) volume from Amazon S3 and launch an EC2 instance in the destination Region using that EBS volume"
		]
	},
	{
		"question": "A company manages its own Amazon EC2 instances that run MySQL databases. The company is manually managing replication and scaling as demand increases or decreases. The company needs a new solution that simplifies the process of adding or removing compute capacity to or from its database tier as needed. The solution also must offer improved performance, scaling, and durability with minimal effort from operations. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Migrate the databases to Amazon Aurora Serverless for Aurora MySQL."
		],
		"wrongAnswersArray": [
			"Migrate the databases to Amazon Aurora Serverless for Aurora PostgreSQL.",
			"Combine the databases into one larger MySQL database. Run the larger database on larger EC2 instances.",
			"Create an EC2 Auto Scaling group for the database tier. Migrate the existing databases to the new Environment."
		]
	},
	{
		"question": "A company is reviewing a recent migration of a three-tier application to a VPC. The security team discovers that the principle of least privilege is not being applied to Amazon EC2 security group ingress and egress rules between the application tiers. What should a solutions architect do to correct this issue?",
		"correctAnswersArray": [
			"Create security group rules using the security group ID as the source or destination."
		],
		"wrongAnswersArray": [
			"Create security group rules using the VPC CIDR blocks as the source or destination",
			"Create security group rules using the subnet CIDR blocks as the source or destination.",
			"Create security group rules using the instance ID as the source or destination."
		]
	},
	{
		"question": "A company is using an Application Load Balancer (ALB) to present its application to the internet. The company finds abnormal traffic access patterns across the application. A solutions architect needs to improve visibility into the infrastructure to help the company understand these abnormalities better. What is the MOST operationally efficient solution that meets these requirements?",
		"correctAnswersArray": [
			"Enable ALB access logging to Amazon S3. Create a table in Amazon Athena, and query the logs."
		],
		"wrongAnswersArray": [
			"Create a table in Amazon Athena for AWS CloudTrail logs. Create a query for the relevant information.",
			"Enable ALB access logging to Amazon S3. Open each file in a text editor, and search each line for the relevant information.",
			"Use Amazon EMR on a dedicated Amazon EC2 instance to directly query the ALB to acquire traffic access log Information."
		]
	},
	{
		"question": "A company's order fulfillment service uses a MySQL database. The database needs to support a large number of concurrent queries and transactions. Developers are spending time patching and tuning the database. This is causing delays in releasing new product features. The company wants to use cloud-based services to help address this new challenge. The solution must allow the developers to migrate the database with little or no code changes and must optimize performance. Which service should a solutions architect use to meet these requirements?",
		"correctAnswersArray": [
			"Amazon Aurora"
		],
		"wrongAnswersArray": [
			"MySQL on Amazon EC2",
			"Amazon ElastiCache",
			"Amazon DynamoDB"
		]
	},
	{
		"question": "A company is running a web-based game in two Availability Zones in the us-west-2 Region. The web servers use an Application Load Balancer (ALB) in public subnets. The ALB has an SSL certificate from AWS Certificate Manager (ACM) with a custom domain name. The game is written in JavaScript and runs entirely in a user's web browser. The game is increasing in popularity in many countries around the world. The company wants to update the application architecture and optimize costs without compromising performance. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon S3 and create an S3 bucket in us-west-2. Deploy the HTML and JavaScript files to the S3 bucket. Use Amazon CloudFront and create a global distribution with the S3 bucket as the origin. Use ACM to create a new certificate for the distribution. Use Amazon Route 53 to update the application alias to point to the distribution."
		],
		"wrongAnswersArray": [
			"Use AWS CloudFormation to deploy the application stack to AWS Regions near countries where the game is popular. Use ACM to create a new certificate for each application instance. Use Amazon Route 53 with a geolocation routing policy to direct traffic to the local application instance.",
			"Use Amazon S3 and create an S3 bucket in AWS Regions near countries where the game is popular. Deploy the HTML and JavaScript files to each S3 bucket. Use ACM to create a new certificate for each S3 bucket. Use Amazon Route 53 with a geolocation routing policy to direct traffic to the local S3 bucket.",
			"Use Amazon CloudFront and create a global distribution that points to the ALB. Reuse the existing certificate from ACM for the CloudFront distribution. Use Amazon Route 53 to update the application alias to point to the distribution."
		]
	},
	{
		"question": "A company's web application uses an Amazon RDS PostgreSQL DB instance to store its application data. During the financial closing period at the start of every month, Accountants run large queries that impact the database's performance due to high usage. The company wants to minimize the impact that the reporting activity has on the web application. What should a solutions architect do to reduce the impact on the database with the LEAST amount of effort?",
		"correctAnswersArray": [
			"Create a read replica and direct reporting traffic to the replica."
		],
		"wrongAnswersArray": [
			"Create an Amazon Redshift database and direct reporting traffic to the Amazon Redshift database.",
			"Create a Multi-AZ database and direct reporting traffic to the standby.",
			"Create a cross-Region read replica and direct reporting traffic to the replica."
		]
	},
	{
		"question": "A company is running a web application on Amazon EC2 instances in an Auto Scaling group. The application uses a database that runs on an Amazon RDS for PostgreSQL DB instance. The application performs slowly as traffic increases, and the database experiences a heavy read load during periods of high traffic. Which actions should a solutions architect take to resolve these performance issues? (Select TWO.)",
		"correctAnswersArray": [
			"Create an Amazon ElastiCache cluster. Configure the application to cache query results in the ElastiCache cluster.",
			"Create a read replica for the DB instance. Configure the application to send read traffic to the read replica.",
		],
		"wrongAnswersArray": [
			"Configure the Auto Scaling group subnets to ensure that the EC2 instances are provisioned in the same Availability Zone as the DB instance.",
			"Enable Multi-AZ for the DB instance. Configure the application to send read traffic to the standby DB instance",
			"Enable auto scaling for the DB instance."
		]
	},
	{
		"question": "A company allows its developers to attach existing IAM policies to existing IAM roles to enable faster experimentation and agility. However, the security operations team is concerned that the developers could attach the existing administrator policy, which would allow the developers to circumvent any other security policies. How should a solutions architect address this issue?",
		"correctAnswersArray": [
			"Set an IAM permissions boundary on the developer IAM role that explicitly denies attaching the administrator policy."
		],
		"wrongAnswersArray": [
			"Create an Amazon SNS topic to send an alert every time a developer creates a new policy.",
			"Use service control policies to disable IAM activity across all accounts in the organizational unit.",
			"Prevent the developers from attaching any policies and assign all IAM duties to the security operations team."
		]
	},
	{
		"question": "A company serves content to its subscribers across the world using an application running on AWS. The application has several Amazon EC2 instances in a private subnet behind an Application Load Balancer (ALB). Due to a recent change in copyright restrictions, the chief information officer (CIO) wants to block access for certain countries. Which action will meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon CloudFront to serve the application and deny access to blocked countries."
		],
		"wrongAnswersArray": [
			"Modify the security group for EC2 instances to deny incoming traffic from blocked countries.",
			"Modify the ALB security group to deny incoming traffic from blocked countries.",
			"Use ALB listener rules to return access denied responses to incoming traffic from blocked countries."
		]
	},
	{
		"question": "A company has an application workflow that uses an AWS Lambda function to download and decrypt files from Amazon S3. These files are encrypted using AWS Key Management Service Customer Master Keys (AWS KMS CMKs). A solutions architect needs to design a solution that will ensure the required permissions are set correctly. Which combination of actions accomplish this? (Select TWO.)",
		"correctAnswersArray": [
			"Create a new IAM role with the kms decrypt permission and attach the execution role to the Lambda function.",
			"Grant the decrypt permission for the Lambda IAM role in the KMS key's policy."
		],
		"wrongAnswersArray": [
			"Grant the decrypt permission for the Lambda resource policy in the KMS key's policy",
			"Create a new IAM policy with the kms decrypt permission and attach the policy to the Lambda function.",
			"Attach the kms decrypt permission to the Lambda function's resource policy."
		]
	},
	{
		"question": "A company has an application in which users create a large number of files. The company plans to migrate the application from its on-premises data center to AWS. Currently, the application uploads the files to a shared storage system. A separate fleet of servers then processes the files. Access to the files is controlled through Linux file system permissions. The company needs to migrate the fleet of servers to Amazon EC2 instances. The company must maximize storage scalability and durability without changing the code of the existing application. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Migrate the files to an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on the EC2 Instances."
		],
		"wrongAnswersArray": [
			"Migrate the files to a set of Amazon EC2 instance store volumes. Mount the instance store volumes on the EC2 instances.",
			"Migrate the files to a set of Amazon Elastic Block Store (Amazon EBS) volumes. Mount the EBS volumes on the EC2 instances.",
			"Migrate the files to an Amazon S3 bucket. Mount the S3 bucket on the EC2 instances."
		]
	},
	{
		"question": "A company has media and application files that need to be shared internally. Users currently are authenticated using Active Directory and access files from a Microsoft Windows platform. The chief executive officer wants to keep the same user permissions, but wants the company to improve the process as the company is reaching its storage capacity limit. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Configure Amazon FSx for Windows File Server and move all the media and application files."
		],
		"wrongAnswersArray": [
			"Set up Amazon EC2 on Windows, attach multiple Amazon Elastic Block Store (Amazon EBS) volumes, and move all media and application files.",
			"Configure Amazon Elastic File System (Amazon EFS) and move all media and application files.",
			"Set up a corporate Amazon S3 bucket and move all media and application files."
		]
	},
	{
		"question": "A company hosts a multi-tier web application that uses an Amazon Aurora MySQL DB cluster for storage. The application tier is hosted on Amazon EC2 instances. The company's IT security guidelines mandate that the database credentials be encrypted and rotated every 14 days. What should a solutions architect do to meet this requirement with the LEAST operational effort?",
		"correctAnswersArray": [
			"Create a new AWS Key Management Service (AWS KMS) encryption key. Use AWS Secrets Manager to create a new secret that uses the KMS key with the appropriate credentials. Associate the secret with the Aurora DB cluster. Configure a custom rotation period of 14 days."
		],
		"wrongAnswersArray": [
			"Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system in all EC2 instances of the application tier. Restrict the access to the file on the file system so that the application can read the file and that only super users can modify the file. Implement an AWS Lambda function that rotates the key in Aurora every 14 days and writes new credentials into the file.",
			"Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon S3 bucket that the application uses to load the credentials. Download the file to the application regularly to ensure that the correct credentials are used. Implement an AWS Lambda function that rotates the Aurora credentials every 14 days and uploads these credentials to the file in the S3 bucket.",
			"Create two parameters in AWS Systems Manager Parameter Store one for the user name as a string parameter and one that uses the SecureString type for the password. Select AWS Key Management Service (AWS KMS) encryption for the password parameter, and load these parameters in the application tier. Implement an AWS Lambda function that rotates the password every 14 days."
		]
	},
	{
		"question": "A solutions architect is designing a workload that will store hourly energy consumption by business tenants in a building. The sensors will feed a database through HTTP requests that will add up usage for each tenant. The solutions architect must use managed services when possible. The workload will receive more features in the future as the solutions architect adds independent components. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Use Amazon API Gateway with AWS Lambda functions to receive the data from the sensors, process the data, and store the data in an Amazon DynamoDB table."
		],
		"wrongAnswersArray": [
			"Use an Elastic Load Balancer that is supported by an Auto Scaling group of Amazon EC2 instances to receive and process the data from the sensors. Use an Amazon Elastic File System (Amazon EFS) shared file system to store the processed data.",
			"Use an Elastic Load Balancer that is supported by an Auto Scaling group of Amazon EC2 instances to receive and process the data from the sensors. Use an Amazon S3 bucket to store the processed data.",
			"Use Amazon API Gateway with AWS Lambda functions to receive the data from the sensors, process the data, and store the data in a Microsoft SQL Server Express database on an Amazon EC2 instance."
		]
	},
	{
		"question": "A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes. What should a solutions architect do to accomplish this goal?",
		"correctAnswersArray": [
			"Turn on AWS Config with the appropriate rules"
		],
		"wrongAnswersArray": [
			"Turn on Amazon Inspector with the appropriate assessment template.",
			"Turn on AWS Trusted Advisor with the appropriate checks.",
			"Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon CloudWatch Events)."
		]
	},
	{
		"question": "A company is reviewing a recent migration of a three-tier application to a VPC. The security team discovers that the principle of least privilege is not being applied to Amazon EC2 security group ingress and egress rules between the application tiers. What should a solutions architect do to correct this issue?",
		"correctAnswersArray": [
			"Create security group rules using the security group ID as the source or destination."
		],
		"wrongAnswersArray": [
			"Create security group rules using the instance ID as the source or destination.",
			"Create security group rules using the subnet CIDR blocks as the source or destination.",
			"Create security group rules using the VPC CIDR blocks as the source or destination."
		]
	},
	{
		"question": "A disaster response team is using drones to collect images of recent storm damage. The response team's laptops lack the storage and compute capacity to transfer the images and process the data. While the team has Amazon EC2 instances for processing and Amazon S3 buckets for storage, network connectivity is intermittent and unreliable. The images need to be processed to evaluate the damage. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use AWS Snowball Edge devices to process and store the images."
		],
		"wrongAnswersArray": [
			"Use AWS Storage Gateway pre-installed on a hardware appliance to cache the images locally for Amazon S3 to process the images when connectivity becomes available.",
			"Configure Amazon Kinesis Data Firehose to create multiple delivery streams aimed separately at the S3 buckets for storage and the EC2 instances for processing the images.",
			"Upload the images to Amazon Simple Queue Service (Amazon SQS) during intermittent connectivity to EC2 instances."
		]
	},
	{
		"question": "A company is planning to migrate its virtual server-based workloads to AWS. The company has internet-facing load balancers backed by application servers. The application servers rely on patches from an internet-hosted repository. Which services should a solutions architect recommend be hosted on the public subnet? (Select TWO.)",
		"correctAnswersArray": [
			"Application Load Balancers",
			"NAT gateway",
		],
		"wrongAnswersArray": [
			"Amazon Elastic File System (Amazon EFS) volumes",
			"Amazon RDS DB instances",
			"Amazon EC2 application servers"
		]
	},
	{
		"question": "A company wants to move its on-premises network attached storage (NAS) to AWS. The company wants to make the data available to any Linux instances within its VPC and ensure changes are automatically synchronized across all instances accessing the data store. The majority of the data is accessed very rarely, and some files are accessed by multiple users at the same time. Which solution meets these requirements and is MOST cost-effective?",
		"correctAnswersArray": [
			"Create an Amazon Elastic File System (Amazon EFS) file system within the VPC. Set the lifecycle policy to transition the data to EFS Infrequent Access (EFS IA) after the appropriate number of days."
		],
		"wrongAnswersArray": [
			"Create an Amazon Elastic Block Store (Amazon EBS) snapshot containing the data. Share it with users within the VPC.",
			"Create an Amazon Elastic File System (Amazon EFS) file system within the VPC. Set the throughput mode to Provisioned and to the required amount of IOPS to support concurrent usage.",
			"Create an Amazon S3 bucket that has a lifecycle policy set to transition the data to S3 Standard-Infrequent Access (S3 Standard-IA) after the appropriate number of days."
		]
	},
	{
		"question": "A company processes images into thumbnails and returns an email confirmation to the end user upon completion. The company's existing solution is facing performance bottlenecks and scalability issues. The company wants to migrate this process to AWS and implement a solution that requires the least possible configuration. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use Amazon S3 to store images and send notifications to AWS Lambda. Configure an AWS Lambda function to process the images into thumbnails, store the thumbnails in Amazon S3, and send an email confirmation through Amazon Simple Email Service (Amazon SES)."
		],
		"wrongAnswersArray": [
			"Use Amazon S3 to store images and send notifications to Amazon Simple Queue Service (Amazon SQS). Configure an Amazon EC2 instance to poll the SQS queue to process the images into thumbnails, store the thumbnails in Amazon S3, and send an email confirmation through Amazon Simple Email Service (Amazon SES).",
			"Use Amazon S3 to store images and send notifications to Amazon Simple Notification Service (Amazon SNS). Configure Amazon SNS to invoke an AWS Lambda function to process the images into thumbnails, store the thumbnails in Amazon S3, and send an email confirmation through Amazon Simple Email Service (Amazon SES).",
			"Use Amazon S3 to store images and send notifications to Amazon Simple Queue Service (Amazon SQS). Configure an AWS Lambda function to retrieve the messages from the SQS queue, process the images into thumbnails, store the thumbnails in Amazon S3, and send an email confirmation through Amazon Simple Email Service (Amazon SES)."
		]
	},
	{
		"question": "A company wants to host a web application on AWS that will communicate to a database within a VPC. The application should be highly available. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Deploy a load balancer in multiple Availability Zones with an Auto Scaling group for the web servers, and then deploy Amazon RDS in multiple Availability Zones."
		],
		"wrongAnswersArray": [
			"Deploy a load balancer in the public subnet with an Auto Scaling group for the web servers, and then deploy the database on an Amazon EC2 instance in the private subnet.",
			"Deploy two web servers with an Auto Scaling group, configure a domain that points to the two web servers, and then deploy a database architecture in multiple Availability Zones.",
			"Create two Amazon EC2 instances to host the web servers behind a load balancer, and then deploy the database on a large instance."
		]
	},
	{
		"question": "A company's near-real-time streaming application is running on AWS. As the data is ingested, a job runs on the data and takes 30 minutes to complete. The workload frequently experiences high latency due to large amounts of incoming data. A solutions architect needs to design a scalable and serverless solution to enhance performance. Which combination of steps should the solutions architect take? (Select TWO.)",
		"correctAnswersArray": [
			"Use Amazon Kinesis Data Firehose to ingest the data.",
			"Use AWS Fargate with Amazon Elastic Container Service (Amazon ECS) to process the data."
		],
		"wrongAnswersArray": [
			"Use AWS Lambda with AWS Step Functions to process the data.",
			"Use Amazon EC2 instances in an Auto Scaling group to process the data.",
			"Use AWS Database Migration Service (AWS DMS) to ingest the data."
		]
	},
	{
		"question": "A company has an API-based inventory reporting application running on Amazon EC2 instances. The application stores information in an Amazon DynamoDB table. The company's distribution centers have an on-premises shipping application that calls an API to update the inventory before printing shipping labels. The company has been experiencing application interruptions several times each day, resulting in lost transactions. What should a solutions architect recommend to improve application resiliency?",
		"correctAnswersArray": [
			"Modify the application to send inventory updates using Amazon Simple Queue Service (Amazon SQS)."
		],
		"wrongAnswersArray": [
			"Configure Amazon API Gateway to call the EC2 inventory application APIs.",
			"Modify the shipping application to write to a local database.",
			"Modify the application APIs to run serverless using AWS Lambda."
		]
	},
	{
		"question": "A company wants to build an immutable infrastructure for its software applications. The company wants to test the software applications before sending traffic to them. The company seeks an efficient solution that limits the effects of application bugs. Which combination of steps should a solutions architect recommend? (Select TWO.)",
		"correctAnswersArray": [
			"Use AWS CloudFormation to update the production infrastructure and roll back the stack if the update fails.", "Apply Amazon Route 53 weighted routing to test the staging environment and gradually increase the traffic as the tests pass."
		],
		"wrongAnswersArray": [

			"Use AWS CloudFormation with a parameter set to the staging value in a separate environment other than the production environment.",
			"Use AWS CloudFormation to deploy the staging environment with a snapshot deletion policy and reuse the resources in the production environment if the tests pass.",
			"Apply Amazon Route 53 failover routing to test the staging environment and fail over to the production environment if the tests pass."
		]
	},
	{
		"question": "A company has an application that runs on Amazon EC2 instances within a private subnet in a VPC. The instances access data in an Amazon S3 bucket in the same AWS Region. The VPC contains a NAT gateway in a public subnet to access the S3 bucket. The company wants to reduce costs by replacing the NAT gateway without compromising security or redundancy. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Replace the NAT gateway with a gateway VPC endpoint."
		],
		"wrongAnswersArray": [
			"Replace the NAT gateway with an internet gateway.",
			"Replace the NAT gateway with a NAT instance.",
			"Replace the NAT gateway with an AWS Direct Connect connection."
		]
	},
	{
		"question": "A company hosts a three-tier web application that includes a PostgreSQL database. The database stores the metadata from documents. The company searches the metadata for key terms to retrieve documents that the company reviews in a report each month. The documents are stored in Amazon S3. The documents are usually written only once, but they are updated frequently. The reporting process takes a few hours with the use of relational queries. The reporting process must not affect any document modifications or the addition of new documents. What are the MOST operationally efficient solutions that meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"Set up a new Amazon DocumentDB (with MongoDB compatibility) cluster that includes a read replica. Scale the read replica to generate the reports.",
			"Set up a new Amazon RDS for PostgreSQL Reserved Instance and an On-Demand read replica. Scale the read replica to generate the reports."
		],
		"wrongAnswersArray": [
			"Set up a new Amazon RDS for PostgreSQL Multi-AZ Reserved Instance. Configure the reporting module to query the secondary RDS node so that the reporting module does not affect the primary node.",
			"Set up a new Amazon Aurora PostgreSQL DB cluster that includes a Reserved Instance and an Aurora Replica. Issue queries to the Aurora Replica to generate the reports.",
			"Set up a new Amazon DynamoDB table to store the documents. Use a fixed write capacity to support new document entries. Automatically scale the read capacity to support the reports."
		]
	},
	{
		"question": "A company is planning to move a dynamic web application to AWS. Application assets are stored in a Linux file server. The total volume of data is 140 TB, and the company has 100 Mbps of internet bandwidth available. The company does not want to make any changes to the application during migration. File permissions must be preserved. How should a solutions architect migrate and store the data to meet these requirements?",
		"correctAnswersArray": [
			"Transfer the data by using the Amazon S3 interface for AWS Snowball. Use Amazon FSx for Lustre as the migration destination and for storage."
		],
		"wrongAnswersArray": [
			"Transfer the data by using the AWS CLI s3 cp command. Use Amazon EC2 with Amazon Elastic Block Store (Amazon EBS) as the migration destination and for storage.",
			"Transfer the data by using the file interface for AWS Snowball. Use Amazon Elastic File System (Amazon EFS) as the migration destination and for storage.",
			"Transfer the data by using AWS DataSync. Use AWS Storage Gateway File Gateway as the migration destination and for storage."
		]
	},
	{
		"question": "A company wants to replicate its data to AWS to recover in the event of a disaster. Today, a system administrator has scripts that copy data to a NFS share. Individual backup files need to be accessed with low latency by application administrators to deal with errors in processing. What should a solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Modify the script to copy data to an AWS Storage Gateway for File Gateway virtual appliance instead of the on-premises NFS share"
		],
		"wrongAnswersArray": [
			"Modify the script to copy data to an Amazon Elastic File System (Amazon EFS) volume instead of the on-premises NFS share",
			"Modify the script to copy data to an Amazon S3 Glacier Archive instead of the on-premises NFS share.",
			"Modify the script to copy data to an Amazon S3 bucket instead of the on-premises NFS share."
		]
	},
	{
		"question": "A company has an on-premises data center that is running out of storage capacity. The company wants to migrate its storage infrastructure to AWS while minimizing bandwidth costs. The solution must allow for immediate retrieval of data at no additional cost. How can these requirements be met?",
		"correctAnswersArray": [
			"Deploy AWS Storage Gateway using cached volumes. Use Storage Gateway to store data in Amazon S3 while retaining copies of frequently accessed data subsets locally."
		],
		"wrongAnswersArray": [
			"Deploy Amazon S3 Glacier Vault and enable expedited retrieval. Enable provisioned retrieval capacity for the workload.",
			"Deploy AWS Direct Connect to connect with the on-premises data center. Configure AWS Storage Gateway to store data locally. Use Storage Gateway to asynchronously back up point-in-time snapshots of the data to Amazon S3.",
			"Deploy AWS Storage Gateway using stored volumes to store data locally. Use Storage Gateway to asynchronously back up point-in-time snapshots of the data to Amazon S3."
		]
	},
	{
		"question": "A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an application migration initiative. A solutions architect needs to share an Amazon Machine Image (AMI) from an existing AWS account with the MSP Partner's AWS account. The AMI is backed by Amazon Elastic Block Store (Amazon EBS) and uses a customer managed customer master key (CMK) to encrypt EBS volume snapshots. What is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?",
		"correctAnswersArray": [
			"Modify the LaunchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the CMK's key policy to allow the MSP Partner's AWS account to use the key."
		],
		"wrongAnswersArray": [
			"Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's AWS account. Encrypt the S3 bucket with a CMK that is owned by the MSP Partner. Copy and launch the AMI in the MSP Partner's AWS account.",
			"Modify the LaunchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the CMK's key policy to trust a new CMK that is owned by the MSP Partner for encryption.",
			"Make the encrypted AMI and snapshots publicly available. Modify the CMK's key policy to allow the MSP Partner's AWS account to use the key."
		]
	},
	{
		"question": "A company is architecting a shared storage solution for a gaming application that is hosted in the AWS Cloud. The company needs the ability to use Lustre clients to access data. The solution must be fully managed. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system."
		],
		"wrongAnswersArray": [
			"Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.",
			"Create an AWS DataSync task that shares the data as a mountable file system. Mount the file system to the application server.",
			"Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share."
		]
	},
	{
		"question": "A company is migrating its applications to AWS. Currently, applications that run on premises generate hundreds of terabytes of data that is stored on a shared file system. The company is running an analytics application in the cloud that runs hourly to generate insights from this data. The company needs a solution to handle the ongoing data transfer between the on-premises shared file system and Amazon S3. The solution also must be able to handle occasional interruptions in internet connectivity. Which solution should the company use for the data transfer to meet these requirements?",
		"correctAnswersArray": [
			"AWS DataSync"
		],
		"wrongAnswersArray": [
			"AWS Snowball Edge Storage Optimized",
			"AWS Transfer for SFTP",
			"AWS Migration Hub"
		]
	},
	{
		"question": "A company is running a critical business application on an Amazon EC2 instance. The EC2 instance is hosting an Apache web server and a MySQL database server. The application serves static content and dynamic content to end users. The application is experiencing severe availability issues because of heavy user demand. The company needs a solution that resolves the availability issues with the least operational effort and the least change to the application. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Host static content on Amazon S3. Deploy the application and the web server on AWS Fargate. Use an Application Load Balancer to route traffic. Migrate the database to Amazon Aurora Serverless."
		],
		"wrongAnswersArray": [
			"Deploy the application and the web server on AWS Fargate. Use a Network Load Balancer to route traffic. Migrate the database to Amazon DynamoDB.",
			"Host static content on Amazon S3. Deploy the application on EC2 instances that are configured in an Auto Scaling group. Use an Application Load Balancer to route traffic. Migrate the database to Amazon DynamoDB.",
			"Create an Amazon Machine Image (AMI) from the current EC2 instance. Create an Auto Scaling group to provide more capacity as needed. Use a Network Load Balancer to route traffic."
		]
	},
	{
		"question": "What are the effective IAM permissions of this policy for group members?",
		"correctAnswersArray": [
			"Group members are allowed the ec2 StopInstances and ec2 Terminatelnstances permissions for the us-east-1 Region only when logged in with multi-factor authentication (MFA). Group members are permitted any other Amazon EC2 action within the us-east-1 Region."
		],
		"wrongAnswersArray": [
			"Group members are denied any Amazon EC2 permissions in the us-east-1 Region unless they are logged in with multi-factor authentication (MFA).",
			"Group members are permitted any Amazon EC2 action within the us-east-1 Region. Statements after the Allow permission are not applied.",
			"Group members are allowed the ec2 StopInstances and ec2 Terminatelnstances permissions for all Regions when logged in with multi-factor authentication (MFA). Group members are permitted any other Amazon EC2 action."
		]
	},
	{
		"question": "A solutions architect finds that an Amazon Aurora cluster with On-Demand Instance pricing is being underutilized for a blog application. The application is used only for a few minutes several times each day for reads. What should a solutions architect do to optimize utilization MOST cost-effectively?",
		"correctAnswersArray": [
			"Convert the original Aurora database to Amazon Aurora Serverless."
		],
		"wrongAnswersArray": [
			"Convert the original Aurora database to an Aurora global database.",
			"Enable Auto Scaling on the original Aurora database.",
			"Convert the original Aurora database to Aurora parallel query."
		]
	},
	{
		"question": "A company copies 200 TB of data from a recent ocean survey onto AWS Snowball Edge Storage Optimized devices. The company has a high performance computing (HPC) cluster that is hosted on AWS to look for oil and gas deposits. A solutions architect must provide the cluster with consistent sub-millisecond latency and high-throughput access to the data on the Snowball Edge Storage Optimized devices. The company is sending the devices back to AWS. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create an Amazon S3 bucket. Import the data into the S3 bucket. Configure an Amazon FSx for Lustre file system, and integrate it with the S3 bucket. Access the FSx for Lustre file system from the HPC cluster instances."
		],
		"wrongAnswersArray": [
			"Create an Amazon S3 bucket. Import the data into the S3 bucket. Configure an AWS Storage Gateway file gateway to use the S3 bucket. Access the file gateway from the HPC cluster instances.",
			"Create an Amazon FSx for Lustre file system. Import the data directly into the FSx for Lustre file system. Access the FSx for Lustre file system from the HPC cluster instances",
			"Create an Amazon S3 bucket and an Amazon Elastic File System (Amazon EFS) file system. Import the data into the S3 bucket. Copy the data from the S3 bucket to the EFS file system. Access the EFS file system from the HPC cluster instances."
		]
	},
	{
		"question": "A company has an internet-facing application that runs on premises. The application contains mostly user-generated content. The data is stored in an on-premises network-attached storage system. The company wants to archive this data annually and has chosen to move the archival data to Amazon S3. The company needs a solution to migrate the archival data into an S3 bucket. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use AWS DataSync. Create a configuration to replicate the data from the on-premises environment to Amazon S3."
		],
		"wrongAnswersArray": [
			"Use AWS Storage Gateway Volume Gateway. Cache the data, and then replicate the data from the on-premises environment to Amazon S3.",
			"Use Amazon S3 Transfer Acceleration. Use a third-party backup utility to replicate the data from the on-premises environment to Amazon S3.",
			"Use AWS Transfer Family. Use an SFTP client to serially transfer the data from the on-premises environment to Amazon S3."
		]
	},
	{
		"question": "A company wants to run a gaming application on Amazon EC2 instances that are part of an Auto Scaling group in the AWS Cloud. The application will transmit data by using UDP packets. The company wants to ensure that the application can scale out and in as traffic increases and decreases. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Attach a Network Load Balancer to the Auto Scaling group."
		],
		"wrongAnswersArray": [
			"Attach an Application Load Balancer to the Auto Scaling group",
			"Deploy a NAT instance that is configured with port forwarding to the EC2 instances in the Auto Scaling group.",
			"Deploy an Amazon Route 53 record set with a weighted policy to route traffic appropriately."
		]
	},
	{
		"question": "A company asks a solutions architect to design a new network architecture for its on-premises applications. The company has five application VPCs. Each application VPC supports a different application. All the application VPCs need to reach a shared services VPC for enterprise services. The application VPCs need to communicate with each other. The number of VPCs will increase as the company grows. The company needs a solution that minimizes operational overhead during setup and maintenance. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use AWS Transit Gateway to connect the shared services VPC to each of the application VPCs. Configure routing to allow the application VPCs to access the shared services network."
		],
		"wrongAnswersArray": [
			"Use VPC endpoint services from the application VPCs to reach services on the shared services VPC.",
			"Use VPC peering connections between the application VPCs and the shared services VPC. Add a peering connection and routes between the application VPCs as needed.",
			"Use a virtual private gateway and VPNs in each application VPC to reach the company network. Transfer the network traffic between the application VPCs by using dynamic routing to the on-premises Network."
		]
	},
	{
		"question": "A company has a service that produces event data. The company wants to use AWS to process the event data it is as received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead. How should a solutions architect accomplish this?",
		"correctAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue"
		],
		"wrongAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.",
			"Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.",
			"Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a Subscriber."
		]
	},
	{
		"question": "A company's facility has badge readers at every entrance throughout the building. When badges are scanned, the readers send a message over HTTPS to indicate who attempted to access that particular entrance. A solutions architect must design a system to process these messages from the sensors. The solution must be highly available, and the results must be made available for the company's security team to analyze. Which system architecture should the solutions architect recommend?",
		"correctAnswersArray": [
			"Create an HTTPS endpoint in Amazon API Gateway. Configure the API Gateway endpoint to invoke an AWS Lambda function to process the messages and save the results to an Amazon DynamoDB table."
		],
		"wrongAnswersArray": [
			"Create a gateway VPC endpoint for Amazon S3. Configure a Site-to-Site VPN connection from the facility network to the VPC so that sensor data can be written directly to an S3 bucket by way of the VPC endpoint.",
			"Use Amazon Route 53 to direct incoming sensor messages to an AWS Lambda function. Configure the Lambda function to process the messages and save the results to an Amazon DynamoDB table.",
			"Launch an Amazon EC2 instance to serve as the HTTPS endpoint and to process the messages. Configure the EC2 instance to save the results to an Amazon S3 bucket."
		]
	},
	{
		"question": "A user wants to list the IAM role that is attached to their Amazon EC2 instance. The user has login access to the EC2 instance but does not have IAM permissions. What should a solutions architect do to retrieve this information?",
		"correctAnswersArray": [
			"Run the following EC2 command curl http//169.254.169.254/latest/meta-data/iam/info"
		],
		"wrongAnswersArray": [
			"Run the following EC2 command http //169.254.169.254/latest/dynamic/instance-identity/",
			"Run the following EC2 command curl http//169.254.169.254/latest/user-data/iam/info",
			"Run the following AWS CLI command aws iam get-instance-profile --instance-profile-name ExampleInstanceProfile"
		]
	},
	{
		"question": "A company needs to run its external website on Amazon EC2 instances and on-premises virtualized servers. The AWS environment has a 1 GB AWS Direct Connect connection to the data center. The application has IP addresses that will not change. The on-premises and AWS servers are able to restart themselves while maintaining the same IP address if a failure occurs. Some website users have to add their vendors to an allow list, so the solution must have a fixed IP address. The company needs a solution with the lowest operational overhead to handle this split traffic. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Deploy an Amazon Route 53 Resolver with rules pointing to the on-premises and AWS IP addresses."
		],
		"wrongAnswersArray": [
			"Deploy Amazon API Gateway to direct traffic to the on-premises and AWS IP addresses based on the header of the request.",
			"Deploy a Network Load Balancer on AWS. Create target groups for the on-premises and AWS IP addresses.",
			"Deploy an Application Load Balancer on AWS. Register the on-premises and AWS IP addresses with the target group."
		]
	},
	{
		"question": "A company is developing a video conversion application hosted on AWS. The application will be available in two tiers a free tier and a paid tier. Users in the paid tier will have their videos converted first, and then the free tier users will have their videos converted. Which solution meets these requirements and is MOST cost-effective?",
		"correctAnswersArray": [
			"Two standard Amazon Simple Queue Service (Amazon SQS) queues with one for the paid tier and one for the free tier."
		],
		"wrongAnswersArray": [
			"A single FIFO Amazon Simple Queue Service (Amazon SQS) queue for all file types",
			"A single standard Amazon Simple Queue Service (Amazon SQS) queue for all file types",
			"One FIFO queue for the paid tier and one standard queue for the free tier"
		]
	},
	{
		"question": "A company runs an on-premises application. The company is planning to move the application to containers by using Kubernetes. The company wants to migrate the application to AWS to reduce the overhead of container infrastructure management. A solutions architect must configure the environment to allow deployment of the company's own custom Amazon Machine Image (AMI) to nodes. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Use AWS Fargate on Amazon Elastic Kubernetes Service (Amazon EKS). Store container images in Amazon Elastic Container Registry (Amazon ECR)."
		],
		"wrongAnswersArray": [
			"Provision a Kubernetes cluster on Amazon EC2. Store container images in Docker Hub.",
			"Use Amazon Elastic Kubernetes Service (Amazon EKS) with managed worker nodes. Store container images in Amazon Elastic Container Registry (Amazon ECR).",
			"Use Amazon Elastic Kubernetes Service (Amazon EKS) with self-managed worker nodes. Store container images in an image repository that runs on Amazon EC2."
		]
	},
	{
		"question": "A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images. Which method is the MOST cost-effective for hosting the website?",
		"correctAnswersArray": [
			"Create an Amazon S3 bucket and host the website there."
		],
		"wrongAnswersArray": [
			"Deploy a web server on an Amazon EC2 instance to host the website.",
			"Containerize the website and host it in AWS Fargate.",
			"Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js Framework."
		]
	},
	{
		"question": "A company uses GPS trackers to document the migration patterns of thousands of sea turtles. The trackers check every 5 minutes to see if a turtle has moved more than 100 yards (91.4 meters). If a turtle has moved, its tracker sends the new coordinates to a web application running on three Amazon EC2 instances that are in multiple Availability Zones in one AWS Region. Recently, the web application was overwhelmed while processing an unexpected volume of tracker data. Data was lost with no way to replay the events. A solutions architect must prevent this problem from happening again and needs a solution with the least operational overhead. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create an Amazon API Gateway endpoint to handle transmitted location coordinates. Use an AWS Lambda function to process each item concurrently."
		],
		"wrongAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) queue to store the incoming data. Configure the application to poll for new messages for processing.",
			"Create an Amazon S3 bucket to store the data. Configure the application to scan for new data in the bucket for processing.",
			"Create an Amazon DynamoDB table to store transmitted location coordinates. Configure the application to query the table for new data for processing. Use TTL to remove data that has been processed."
		]
	},
	{
		"question": "A company uses Amazon S3 as its object storage solution. The company has thousands of S3 buckets it uses to store data. Some of the S3 buckets have data that is accessed less frequently than others. A solutions architect found that lifecycle policies are not consistently implemented or are implemented partially, resulting in data being stored in high-cost storage. Which solution will lower costs without compromising the availability of objects?",
		"correctAnswersArray": [
			"Use S3 Intelligent-Tiering storage."
		],
		"wrongAnswersArray": [
			"Use S3 ACLs.",
			"Use S3 One Zone-Infrequent Access (S3 One Zone-IA)",
			"Use Amazon Elastic Block Store (Amazon EBS) automated snapshots"
		]
	},
	{
		"question": "A solutions architect plans to convert a company's monolithic web application into a multi-tier application. The company wants to avoid managing its own infrastructure. The minimum requirements for the web application are high availability, scalability, and regional low latency during peak hours. The solution should also store and retrieve data with millisecond latency using the application's API. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use Amazon API Gateway with an edge-optimized API endpoint, AWS Lambda for compute, and Amazon DynamoDB as the data store."
		],
		"wrongAnswersArray": [
			"Use AWS Fargate to host the web application with backend Amazon RDS Multi-AZ DB instances",
			"Use an Amazon CloudFront distribution that points to an Elastic Load Balancer with an Amazon EC2 Auto Scaling group, along with Amazon RDS Multi-AZ DB instances",
			"Use an Amazon Route 53 routing policy with geolocation that points to an Amazon S3 bucket with static website hosting and Amazon DynamoDB as the data store."
		]
	},
	{
		"question": "A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC. The EC2 instances run inside several subnets across multiple Availability Zones. The EC2 instances do not communicate with each other. However, the EC2 instances download images from Amazon S3 and upload images to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges. What is the MOST cost-effective way for the company to avoid Regional data transfer charges",
		"correctAnswersArray": [
			"Deploy a gateway VPC endpoint for Amazon S3."
		],
		"wrongAnswersArray": [
			"Provision an EC2 Dedicated Host to run the EC2 instances.",
			"Replace the NAT gateway with a NAT instance.",
			"Launch the NAT gateway in each Availability Zone."
		]
	},
	{
		"question": "A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour. What should the solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time."
		],
		"wrongAnswersArray": [
			"Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.",
			"Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB.",
			"Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot."
		]
	},
	{
		"question": "A company serves a multilingual website from a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). This architecture is currently running in the us-west-1 Region but is exhibiting high request latency for users located in other parts of the world. The website needs to serve requests quickly and efficiently regardless of a user's location. However, the company does not want to recreate the existing architecture across multiple Regions. How should a solutions architect accomplish this?",
		"correctAnswersArray": [
			"Configure an Amazon CloudFront distribution with the ALB as the origin. Set the cache behavior settings to only cache based on the Accept-Language request header."
		],
		"wrongAnswersArray": [
			"Set up Amazon API Gateway with the ALB as an integration. Configure API Gateway to use an HTTP integration type. Set up an API Gateway stage to enable the API cache.",
			"Launch an EC2 instance in each additional Region and configure NGINX to act as a cache server for that Region. Put all the instances plus the ALB behind an Amazon Route 53 record set with a geolocation routing policy.",
			"Replace the existing architecture with a website served from an Amazon S3 bucket. Configure an Amazon CloudFront distribution with the S3 bucket as the origin."
		]
	},
	{
		"question": "An ecommerce company is running a multi-tier application on AWS. The front-end and backend tiers both run on Amazon EC2, and the database runs on Amazon RDS for MySQL. The backend tier communicates with the RDS instance. There are frequent calls to return identical datasets from the database that are causing performance slowdowns. Which action should be taken to improve the performance of the backend?",
		"correctAnswersArray": [
			"Implement Amazon ElastiCache to cache the large datasets."
		],
		"wrongAnswersArray": [
			"Implement an RDS for MySQL read replica to cache database calls.",
			"Implement Amazon SNS to store the database calls",
			"Implement Amazon Kinesis Data Firehose to stream the calls to the database."
		]
	},
	{
		"question": "A company manages its own Amazon EC2 instances that run MySQL databases. The company is manually managing replication and scaling as demand increases or decreases. The company needs a new solution that simplifies the process of adding or removing compute capacity to or from its database tier as needed. The solution also must offer improved performance, scaling, and durability with minimal effort from operations. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Migrate the databases to Amazon Aurora Serverless for Aurora MySQL."
		],
		"wrongAnswersArray": [
			"Create an EC2 Auto Scaling group for the database tier. Migrate the existing databases to the new Environment.",
			"Migrate the databases to Amazon Aurora Serverless for Aurora PostgreSQL.",
			"Combine the databases into one larger MySQL database. Run the larger database on larger EC2 instances."
		]
	},
	{
		"question": "A company has migrated several applications to AWS in the past 3 months. The company wants to know the breakdown of costs for each of these applications. The company wants to receive a regular report that includes this information. Which solution will meet these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Tag all the AWS resources with a key for cost and a value of the application's name. Activate cost allocation tags. Use Cost Explorer to get the desired information."
		],
		"wrongAnswersArray": [
			"Tag all the AWS resources with a key for cost and a value of the application's name. Use the AWS Billing and Cost Management console to download bills for the past 3 months. Look up the desired Information.",
			"Use AWS Budgets to download data for the past 3 months into a .CSV file. Look up the desired information.",
			"Load AWS Cost and Usage Reports into an Amazon RDS DB instance. Run SQL queries to get the desired information."
		]
	},
	{
		"question": "A company's security team requests that network traffic be captured in VPC Flow Logs. The logs will be frequently accessed for 90 days and then accessed intermittently. What should a solutions architect do to meet these requirements when configuring the logs?",
		"correctAnswersArray": [
			"Use Amazon S3 as the target. Enable an S3 Lifecycle policy to transition the logs to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days."
		],
		"wrongAnswersArray": [
			"Use Amazon Kinesis as the target. Configure the Kinesis stream to always retain the logs for 90 days.",
			"Use Amazon CloudWatch as the target. Set the CloudWatch log group with an expiration of 90 days.",
			"Use AWS CloudTrail as the target. Configure CloudTrail to save to an Amazon S3 bucket, and enable S3 Intelligent-Tiering."
		]
	},
	{
		"question": "A healthcare company stores highly sensitive patient records. Compliance requires that multiple copies be stored in different locations. Each record must be stored for 7 years. The company has a service level agreement (SLA) to provide records to government agencies immediately for the first 30 days and then within 4 hours of a request thereafter. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use Amazon S3 with cross-Region replication enabled. After 30 days, transition the data to Amazon S3 Glacier using a lifecycle policy."
		],
		"wrongAnswersArray": [
			"Use Amazon S3 with cross-origin resource sharing (CORS) enabled. After 30 days, transition the data to Amazon S3 Glacier Deep Archive using a lifecycle policy.",
			"Use Amazon S3 with cross-origin resource sharing (CORS) enabled. After 30 days, transition the data to Amazon S3 Glacier using a lifecycle policy.",
			"Use Amazon S3 with cross-Region replication enabled. After 30 days, transition the data to Amazon S3 Glacier Deep Archive using a lifecycle policy."
		]
	},
	{
		"question": "A company is building applications in containers. The company wants to migrate its on-premises development and operations services from its on-premises data center to AWS. Management states that production systems must be cloud agnostic and use the same configuration and administrative tools across all production systems. A solutions architect needs to design a managed solution that will align with open-source software. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Launch the containers on Amazon Elastic Kubernetes Service (Amazon EKS) and EKS worker nodes."
		],
		"wrongAnswersArray": [
			"Launch the containers on Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 instance worker nodes.",
			"Launch the containers on Amazon Elastic Container Service (Amazon ECS) with AWS Fargate instances.",
			"Launch the containers on Amazon EC2 with EC2 instance worker nodes."
		]
	},
	{
		"question": "A company is hosting 60 TB of production-level data in an Amazon S3 bucket. A solutions architect needs to bring that data on premises for quarterly audit requirements. This export of data must be encrypted while in transit. The company has low network bandwidth in place between AWS and its on-premises data center. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Deploy an AWS Snowball device in the on-premises data center after completing an export job request in the AWS Snowball console."
		],
		"wrongAnswersArray": [
			"Deploy AWS Migration Hub with 90-day replication windows for data transfer.",
			"Deploy Amazon Elastic File System (Amazon EFS), with lifecycle policies enabled, on AWS. Use it to transfer the data.",
			"Deploy an AWS Storage Gateway volume gateway on AWS. Enable a 90-day replication window to transfer the data."
		]
	},
	{
		"question": "A company's production application runs online transaction processing (OLTP) transactions on an Amazon RDS MySQL DB instance. The company is launching a new reporting tool that will access the same data. The reporting tool must be highly available and not impact the performance of the production application. How can this be achieved?",
		"correctAnswersArray": [
			"Create a Multi-AZ RDS Read Replica of the production RDS DB instance."
		],
		"wrongAnswersArray": [
			"Create a Single-AZ RDS Read Replica of the production RDS DB instance. Create a second Single-AZ RDS Read Replica from the replica.",
			"Create multiple RDS Read Replicas of the production RDS DB instance. Place the Read Replicas in an Auto Scaling group.",
			"Create hourly snapshots of the production RDS DB instance"
		]
	},
	{
		"question": "A company recently launched a new service that involves medical images. The company scans the images and sends them from its on-premises data center through an AWS Direct Connect connection to Amazon EC2 instances. After processing is complete, the images are stored in an Amazon S3 bucket. A company requirement states that the EC2 instances cannot be accessible through the internet. The EC2 instances run in a private subnet, which has a default route back to the on-premises data center for outbound internet access. Usage of the new service is increasing rapidly. A solutions architect must recommend a solution that meets the company's requirements and reduces the Direct Connect charges. Which solution accomplishes these goals MOST cost-effectively?",
		"correctAnswersArray": [
			"Configure a VPC endpoint for Amazon S3. Add an entry to the private subnet's route table for the S3 endpoint."
		],
		"wrongAnswersArray": [
			"Configure Amazon S3 as a file system mount point on the EC2 instances. Access Amazon S3 through the mount.",
			"Move the EC2 instances into a public subnet. Configure the public subnet route table to point to an internet gateway.",
			"Configure a NAT gateway in a public subnet. Configure the private subnet's route table to use the NAT gateway."
		]
	},
	{
		"question": "A company's application is running on Amazon EC2 instances in a single Region. In the event of a disaster, a solutions architect needs to ensure that the resources can also be deployed to a second Region. Which combination of actions should the solutions architect take to accomplish this? (Select TWO.)",
		"correctAnswersArray": [
			"Copy an Amazon Machine Image (AMI) of an EC2 instance and specify a different Region for the destination."
		],
		"wrongAnswersArray": [
			"Launch a new EC2 instance from an Amazon Machine Image (AMI) in a new Region.",
			"Copy an Amazon Elastic Block Store (Amazon EBS) volume from Amazon S3 and launch an EC2 instance in the destination Region using that EBS volume",
			"Launch a new EC2 instance in a new Region and copy a volume from Amazon S3 to the new instance.",
			"Detach a volume on an EC2 instance and copy it to Amazon S3."
		]
	},
	{
		"question": "A solutions architect is designing a multi-tier application for a company. The application's users upload images from a mobile device. The application generates a thumbnail of each image and returns a message to the user to confirm that the image was uploaded successfully. The thumbnail generation can take up to 60 seconds, but the company wants to provide a faster response time to its users to notify them that the original image was received. The solutions architect must design the application to asynchronously dispatch requests to the different application tiers. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) message queue. As images are uploaded, place a message on the SQS queue for thumbnail generation. Alert the user through an application message that the image was received."
		],
		"wrongAnswersArray": [
			"Create an AWS Step Functions workflow. Configure Step Functions to handle the orchestration between the application tiers and alert the user when thumbnail generation is complete.",
			"Create Amazon Simple Notification Service (Amazon SNS) notification topics and subscriptions. Use one subscription with the application to generate the thumbnail after the image upload is complete. Use a second subscription to message the user's mobile app by way of a push notification after thumbnail generation is complete.",
			"Write a custom AWS Lambda function to generate the thumbnail and alert the user. Use the image upload process as an event source to invoke the Lambda function."
		]
	},
	{
		"question": "A company has applications that run on Amazon EC2 instances in a VPC. One of the applications needs to call the Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the applications is allowed to travel across the internet. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Configure an S3 gateway endpoint."
		],
		"wrongAnswersArray": [
			"Create an S3 bucket in the same AWS Region as the EC2 instances.",
			"Configure a NAT gateway in the same subnet as the EC2 instances.",
			"Create an S3 bucket in a private subnet."
		]
	},
	{
		"question": "A company has created a multi-tier application for its ecommerce website. The website uses an Application Load Balancer that resides in the public subnets, a web tier in the public subnets, and a MySQL cluster hosted on Amazon EC2 instances in the private subnets. The MySQL database needs to retrieve product catalog and pricing information that is hosted on the internet by a third-party provider. A solutions architect must devise a strategy that maximizes security without increasing operational overhead. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Deploy a NAT gateway in the public subnets. Modify the private subnet route table to direct all internet-bound traffic to the NAT gateway."
		],
		"wrongAnswersArray": [
			"Configure a virtual private gateway and attach it to the VPC. Modify the private subnet route table to direct internet-bound traffic to the virtual private gateway.",
			"Deploy a NAT instance in the VPC. Route all the internet-based traffic through the NAT instance.",
			"Configure an internet gateway and attach it to the VPC. Modify the private subnet route table to direct internet-bound traffic to the internet gateway."
		]
	},
	{
		"question": "What should a solutions architect do to ensure that all objects uploaded to an Amazon S3 bucket are encrypted?",
		"correctAnswersArray": [
			"Update the bucket policy to deny if the PutObject does not have an x-amz-server-side-encryption header set."
		],
		"wrongAnswersArray": [
			"Update the bucket policy to deny if the PutObject does not have an s3 x-amz-acl header set",
			"Update the bucket policy to deny if the PutObject does not have an s3 x-amz-acl header set to private",
			"Update the bucket policy to deny if the PutObject does not have an aws SecureTransport header set to true."
		]
	},
	{
		"question": "A company has a remote factory that has unreliable connectivity. The factory needs to gather and process machine data and sensor data so that it can sense products on its conveyor belts and initiate a robotic movement to direct the products to the right location. Predictable low-latency compute processing is essential for the on-premises control systems. Which solution should the factory use to process the data?",
		"correctAnswersArray": [
			"An Amazon EC2 instance that has enhanced networking enabled"
		],
		"wrongAnswersArray": [
			"Amazon CloudFront Lambda@Edge functions",
			"An Amazon Elastic Block Store (Amazon EBS) volume on an AWS Snowball Edge cluster",
			"An Amazon EC2 instance that uses an AWS Global Accelerator endpoint"
		]
	},
	{
		"question": "A company stores data in an Amazon Aurora PostgreSQL DB cluster. The company must store all the data for 5 years and must delete all the data after 5 years. The company also must indefinitely keep audit logs of actions that are performed within the database. Currently, the company has automated backups configured for Aurora. Which combination of steps should a solutions architect take to meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"Configure an Amazon CloudWatch Logs export for the DB cluster.",
			"Use AWS Backup to take the backups and to keep the backups for 5 years."
		],
		"wrongAnswersArray": [
			"Configure automated backup retention for 5 years.",
			"Take a manual snapshot of the DB cluster.",
			"Create a lifecycle policy for the automated backups."
		]
	},
	{
		"question": "A solutions architect must provide a fully managed replacement for an on-premises solution that allows employees and partners to exchange files. The solution must be easily accessible to employees connecting from on-premises systems, remote employees, and external partners. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use AWS Transfer for SFTP to transfer files into and out of Amazon S3."
		],
		"wrongAnswersArray": [
			"Use AWS Snowball Edge for local storage and large-scale data transfers.",
			"Use Amazon FSx to store and transfer files to make them available remotely.",
			"Use AWS Storage Gateway to create a volume gateway to store and transfer files to Amazon S3."
		]
	},
	{
		"question": "A company uses 50 TB of data for reporting. The company wants to move this data from on premises to AWS. A custom application in the company's data center runs a weekly data transformation job. The company plans to pause the application until the data transfer is complete and needs to begin the transfer process as soon as possible.The data center does not have any available network bandwidth for additional workloads. A solutions architect must transfer the data and must configure the transformation job to continue to run in the AWS Cloud. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue."
		],
		"wrongAnswersArray": [
			"Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue.",
			"Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application.",
			"Order an AWS Snowcone device to move the data. Deploy the transformation application to the device."
		]
	},
	{
		"question": "A company's facility has badge readers at every entrance throughout the building. When badges are scanned, the readers send a message over HTTPS to indicate who attempted to access that particular entrance. A solutions architect must design a system to process these messages from the sensors. The solution must be highly available, and the results must be made available for the company's security team to analyze. Which system architecture should the solutions architect recommend?",
		"correctAnswersArray": [
			"Create an HTTPS endpoint in Amazon API Gateway. Configure the API Gateway endpoint to invoke an AWS Lambda function to process the messages and save the results to an Amazon DynamoDB table."
		],
		"wrongAnswersArray": [
			"Create a gateway VPC endpoint for Amazon S3. Configure a Site-to-Site VPN connection from the facility network to the VPC so that sensor data can be written directly to an S3 bucket by way of the VPC endpoint.",
			"Use Amazon Route 53 to direct incoming sensor messages to an AWS Lambda function. Configure the Lambda function to process the messages and save the results to an Amazon DynamoDB table.",
			"Launch an Amazon EC2 instance to serve as the HTTPS endpoint and to process the messages.",
			"Configure the EC2 instance to save the results to an Amazon S3 bucket."
		]
	},
	{
		"question": "A company has a web application hosted over 10 Amazon EC2 instances with traffic directed by Amazon Route 53. The company occasionally experiences a timeout error when attempting to browse the application. The networking team finds that some DNS queries return IP addresses of unhealthy instances, resulting in the timeout error. What should a solutions architect implement to overcome these timeout errors?",
		"correctAnswersArray": [
			"Create a Route 53 failover routing policy record for each EC2 instance. Associate a health check with each record."
		],
		"wrongAnswersArray": [
			"Create a Route 53 simple routing policy record for each EC2 instance. Associate a health check with each record.",
			"Create an Amazon CloudFront distribution with EC2 instances as its origin. Associate a health check with the EC2 instances.",
			"Create an Application Load Balancer (ALB) with a health check in front of the EC2 instances. Route to the ALB from Route 53."
		]
	},
	{
		"question": "A company's website handles millions of requests each day, and the number of requests continues to increase. A solutions architect needs to improve the response time of the web application. The solutions architect determines that the application needs to decrease latency when retrieving product details from the Amazon DynamoDB table. Which solution will meet these requirements with the LEAST amount of operational overhead?",
		"correctAnswersArray": [
			"Set up a DynamoDB Accelerator (DAX) cluster. Route all read requests through DAX."
		],
		"wrongAnswersArray": [
			"Set up Amazon ElastiCache for Memcached between the DynamoDB table and the web application. Route all read requests through Memcached.",
			"Set up Amazon DynamoDB Streams on the table, and have AWS Lambda read from the table and populate Amazon ElastiCache. Route all read requests through ElastiCache.",
			"Set up Amazon ElastiCache for Redis between the DynamoDB table and the web application. Route all read requests through Redis."
		]
	},
	{
		"question": "A company has primary and secondary data centers that are 500 miles (804.7 km) apart and interconnected with high-speed fiber-optic cable. The company needs a highly available and secure network connection between its data centers and a VPC on AWS for a mission-critical workload. A solutions architect must choose a connection solution that provides maximum resiliency. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Two AWS Direct Connect connections from each of the primary and secondary data centers terminating at two Direct Connect locations on two separate devices."
		],
		"wrongAnswersArray": [
			"A single AWS Direct Connect connection from each of the primary and secondary data centers terminating at one Direct Connect location on two separate devices.",
			"Two AWS Direct Connect connections from the primary data center terminating at two Direct Connect locations on two separate devices.",
			"A single AWS Direct Connect connection from each of the primary and secondary data centers terminating at one Direct Connect location on the same device."
		]
	},
	{
		"question": "A company copies 200 TB of data from a recent ocean survey onto AWS Snowball Edge Storage Optimized devices. The company has a high performance computing (HPC) cluster that is hosted on AWS to look for oil and gas deposits. A solutions architect must provide the cluster with consistent sub-millisecond latency and high-throughput access to the data on the Snowball Edge Storage Optimized devices. The company is sending the devices back to AWS. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create an Amazon S3 bucket. Import the data into the S3 bucket. Configure an Amazon FSx for Lustre file system, and integrate it with the S3 bucket. Access the FSx for Lustre file system from the HPC cluster instances."
		],
		"wrongAnswersArray": [
			"Create an Amazon S3 bucket and an Amazon Elastic File System (Amazon EFS) file system. Import the data into the S3 bucket. Copy the data from the S3 bucket to the EFS file system. Access the EFS file system from the HPC cluster instances.",
			"Create an Amazon FSx for Lustre file system. Import the data directly into the FSx for Lustre file system. Access the FSx for Lustre file system from the HPC cluster instances.",
			"Create an Amazon S3 bucket. Import the data into the S3 bucket. Configure an AWS Storage Gateway file gateway to use the S3 bucket. Access the file gateway from the HPC cluster instances."
		]
	},
	{
		"question": "A company needs to create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster to host a digital media streaming application. The EKS cluster will use a managed node group that is backed by Amazon Elastic Block Store (Amazon EBS) volumes for storage. The company must encrypt all data at rest by using a customer managed key that is stored in AWS Key Management Service (AWS KMS). Which combination of actions will meet this requirement with the LEAST operational overhead? (Select TWO.)",
		"correctAnswersArray": [
			"Enable EBS encryption by default in the AWS Region where the EKS cluster will be created. Select the customer managed key as the default key.",
			"Create the EKS cluster. Create an IAM role that has a policy that grants permission to the customer managed key. Associate the role with the EKS cluster."
		],
		"wrongAnswersArray": [
			"Store the customer managed key as a Kubernetes secret in the EKS cluster. Use the customer managed key to encrypt the EBS volumes.",
			"Use a Kubernetes plugin that uses the customer managed key to perform data encryption.",
			"After creation of the EKS cluster, locate the EBS volumes. Enable encryption by using the customer managed key."
		]
	},
	{
		"question": "A company has migrated a two-tier application from its on-premises data center to the AWS Cloud. The data tier is a Multi-AZ deployment of Amazon RDS for Oracle with 12 TB of General Purpose SSD Amazon Elastic Block Store (Amazon EBS) storage. The application is designed to process and store documents in the database as binary large objects (blobs) with an average document size of 6 MB.The database size has grown over time, reducing the performance and increasing the cost of storage. The company must improve the database performance and needs a solution that is highly available and resilient. Which solution will meet these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Create an Amazon S3 bucket. Update the application to store documents in the S3 bucket. Store the object metadata in the existing database."
		],
		"wrongAnswersArray": [
			"Reduce the RDS DB instance size. Increase the storage capacity to 24 TiB. Change the storage type to Magnetic.",
			"Create an Amazon DynamoDB table. Update the application to use DynamoDB. Use AWS Database Migration Service (AWS DMS) to migrate data from the Oracle database to DynamoDB.",
			"Increase the RDS DB instance size. Increase the storage capacity to 24 TiB. Change the storage type to Provisioned IOPS."
		]
	},
	{
		"question": "A hospital wants to create digital copies for its large collection of historical written records. The hospital will continue to add hundreds of new documents each day. The hospital's data team will scan the documents and will upload the documents to the AWS Cloud. A solutions architect must implement a solution to analyze the documents, extract the medical information, and store the documents so that an application can run SQL queries on the data. The solution must maximize scalability and operational efficiency. Which combination of steps should the solutions architect take to meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant information from the text.",
			"Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data."
		],
		"wrongAnswersArray": [
			"Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text.",
			"Create an Auto Scaling group of Amazon EC2 instances to run a custom application that processes the scanned files and extracts the medical information.",
			"Write the document information to an Amazon EC2 instance that runs a MySQL database."
		]
	},
	{
		"question": "A solutions architect needs to implement a solution to reduce a company's storage costs. All the company's data is in the Amazon S3 Standard storage class. The company must keep all data for at least 25 years. Data from the most recent 2 years must be highly available and immediately retrievable. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 years."
		],
		"wrongAnswersArray": [
			"Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately and to S3 Glacier Deep Archive after 2 years.",
			"Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately.",
			"Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in S3 Glacier Deep Archive."
		]
	},
	{
		"question": "A company runs a public three-tier web application in a VPC. The application runs on Amazon EC2 instances across multiple Availability Zones. The EC2 instances that run in private subnets need to communicate with a license server over the internet. The company needs a managed solution that minimizes operational maintenance. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Provision a NAT gateway in a public subnet. Modify each private subnet's route table with a default route that points to the NAT gateway."
		],
		"wrongAnswersArray": [
			"Provision a NAT instance in a public subnet. Modify each private subnet's route table with a default route that points to the NAT instance.",
			"Provision a NAT instance in a private subnet. Modify each private subnet's route table with a default route that points to the NAT instance.",
			"Provision a NAT gateway in a private subnet. Modify each private subnet's route table with a default route that points to the NAT gateway."
		]
	},
	{
		"question": "A solutions architect is designing the architecture for a software demonstration environment. The environment will run on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). The system will experience significant increases in traffic during working hours but is not required to operate on weekends. Which combination of actions should the solutions architect take to ensure that the system can scale to meet demand? (Select TWO.)",
		"correctAnswersArray": [
			"Use a target tracking scaling policy to scale the Auto Scaling group based on instance CPU utilization.",
			"Use scheduled scaling to change the Auto Scaling group minimum, maximum, and desired capacity to zero for weekends. Revert to the default values at the start of the week."
		],
		"wrongAnswersArray": [
			"Use AWS Auto Scaling to adjust the ALB capacity based on request rate.",
			"Launch the EC2 instances in multiple AWS Regions to distribute the load across Regions.",
			"Use AWS Auto Scaling to scale the capacity of the VPC internet gateway."
		]
	},
	{
		"question": "A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC. The company had an inspection server in its on-premises data center. The inspection server performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the same functionalities in the AWS Cloud. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC."
		],
		"wrongAnswersArray": [
			"Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC.",
			"Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering.",
			"Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the production VPC."
		]
	},
	{
		"question": "A solutions architect is tasked with transferring 750 TB of data from a network-attached file system located at a branch office to Amazon S3 Glacier. The solution must avoid saturating the branch office's low-bandwidth internet connection. What is the MOST cost-effective solution?",
		"correctAnswersArray": [
			"Order 10 AWS Snowball appliances and select an Amazon S3 bucket as the destination. Create a lifecycle Policy to transition the S3 objects to Amazon S3 Glacier."
		],
		"wrongAnswersArray": [
			"Order 10 AWS Snowball appliances and select an S3 Glacier vault as the destination. Create a bucket policy to enforce a VPC endpoint.",
			"Mount the network-attached file system to Amazon S3 and copy the files directly. Create a lifecycle policy to transition the S3 objects to Amazon S3 Glacier.",
			"Create a site-to-site VPN tunnel to an Amazon S3 bucket and transfer the files directly. Create a bucket policy to enforce a VPC endpoint."
		]
	},
	{
		"question": "A company manages and runs a critical data management application in containers that are hosted on Amazon Elastic Container Service (Amazon ECS). The application has endpoints that are exposed through Application Load Balancers (ALBs). The application uses an Amazon Elastic File System (Amazon EFS) file system mount for persistent data storage. The company has configured Amazon ECS to use a minimal IAM instance role. Which combination of actions should a solutions architect take to improve the overall security posture of the application? (Select TWO.)",
		"correctAnswersArray": [
			"Use AWS Config to define patch management policies on the container instances.",
			"Decompose the Amazon ECS IAM instance role. Use only ECS task roles."
		],
		"wrongAnswersArray": [
			"Use Amazon Macie integration with Amazon EFS to monitor and protect sensitive information in the file system.",
			"Use Amazon GuardDuty to authenticate data access between the ALBs and the container instances.",
			"Enable EFS encryption in transit to protect data that is being written to Amazon EFS.",
		]
	},
	{
		"question": "A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually."
		],
		"wrongAnswersArray": [
			"Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.",
			"Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.",
			"Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate."
		]
	},
	{
		"question": "A company is migrating a Linux-based web server group to AWS. The web servers must access files in a shared file store for some content. The company must not make any changes to the application. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on all web servers."
		],
		"wrongAnswersArray": [
			"Create an Amazon S3 Standard bucket with access to the web servers.",
			"Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin.",
			"Configure a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume to all web servers."
		]
	},
	{
		"question": "A company wants to deploy a new public web application on AWS. The application includes a web server tier that uses Amazon EC2 instances. The application also includes a database tier that uses an Amazon RDS for MySQL DB instance. The application must be secure and accessible for global customers that have dynamic IP addresses. How should a solutions architect configure the security groups to meet these requirements?",
		"correctAnswersArray": [
			"Configure the security group for the web servers to allow inbound traffic on port 443 from 0.0.0.0/0. Configure the security group for the DB instance to allow inbound traffic on port 3306 from the security group of the web servers."
		],
		"wrongAnswersArray": [
			"Configure the security group for the web servers to allow inbound traffic on port 443 from the IP addresses of the customers. Configure the security group for the DB instance to allow inbound traffic on port 3306 from the IP addresses of the customers.",
			"bConfigure the security group for the web servers to allow inbound traffic on port 443 from the IP addresses of the customers. Configure the security group for the DB instance to allow inbound traffic on port 3306 from the security group of the web servers.",
			"Configure the security group for the web servers to allow inbound traffic on port 443 from 0.0.0.0/0. Configure the security group for the DB instance to allow inbound traffic on port 3306 from 0.0.0.0/0."
		]
	},
	{
		"question": "A solutions architect is designing the architecture for a new web application. The application will run on AWS Fargate containers with an Application Load Balancer (ALB) and an Amazon Aurora PostgreSQL database. The web application will perform primarily read queries against the database. What should the solutions architect do to ensure that the website can scale with increasing traffic? (Select TWO.)",
		"correctAnswersArray": [
			"Configure Amazon Elastic Container Service (Amazon ECS) Service Auto Scaling with a target tracking scaling policy that is based on CPU utilization.",
			"Configure Aurora Auto Scaling to adjust the number of Aurora Replicas in the Aurora cluster dynamically."
		],
		"wrongAnswersArray": [
			"Configure an Amazon Elastic Container Service (Amazon ECS) cluster in each Availability Zone to distribute the load across multiple Availability Zones.",
			"Enable auto scaling on the ALB to scale the load balancer horizontally.",
			"Enable cross-zone load balancing on the ALB to distribute the load evenly across containers in all Availability Zones."
		]
	},
	{
		"question": "A company wants to relocate its on-premises MySQL database to AWS. The database accepts regular imports from a client-facing application, which causes a high volume of write operations. The company is concerned that the amount of traffic might be causing performance issues within the application. How should a solutions architect design the architecture on AWS?",
		"correctAnswersArray": [
			"Provision an Amazon RDS for MySQL DB instance with Provisioned IOPS SSD storage. Monitor write operation metrics by using Amazon CloudWatch. Adjust the provisioned OPS if necessary."
		],
		"wrongAnswersArray": [
			"Provision an Amazon RDS for MySQL DB instance with General Purpose SSD storage. Place an Amazon ElastiCache cluster in front of the B instance. Configure the application to query ElastiCache instead.",
			"Provision an Amazon DocumentDB (with MongoDB compatibility) instance with a memory optimized instance type. Monitor Amazon CloudWatch for performance-related issues. Change the instance class if necessary.",
			"Provision an Amazon Elastic File System (Amazon EFS) file system in General Purpose performance mode.Monitor Amazon CloudWatch for OPS bottlenecks. Change to Provisioned Throughput performance mode if necessary."
		]
	},
	{
		"question": "A company runs a fleet of web servers using an Amazon RDS for PostgreSQL DB instance. After a routine compliance check, the company sets a standard that requires a recovery point objective (RPO) of less than 1 second for all its production databases. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Enable a Multi-AZ deployment for the DB instance."
		],
		"wrongAnswersArray": [
			"Configure the B instance in one Availability Zone, and create multiple read replicas in a separate Availability Zone.",
			"Enable auto scaling for the DB instance in one Availability Zone.",
			"Configure the DB instance in one Availability Zone, and configure AWS Database Migration Service (AWS DMS) change data capture (CDC) tasks."
		]
	},
	{
		"question": "A company is architecting a shared storage solution for a gaming application that is hosted in the AWS Cloud. The company needs the ability to use Lustre clients to access data. The solution must be fully managed. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system."
		],
		"wrongAnswersArray": [
			"Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.",
			"Create an AWS DataSync task that shares the data as a mountable file system. Mount the file system to the application server.",
			"Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share."
		]
	},
	{
		"question": "A company is running a highly sensitive application on Amazon EC2 backed by an Amazon RDS database. Compliance regulations mandate that all personally identifiable information (PI) be encrypted at rest. Which solution should a solutions architect recommend to meet this requirement with the LEAST amount of changes to the infrastructure?",
		"correctAnswersArray": [
			"Configure Amazon Elastic Block Store (Amazon EBS) encryption and Amazon RDS encryption with AWS Key Management Service (AWS KMS) keys to encrypt instance and database volumes."
		],
		"wrongAnswersArray": [
			"Deploy AWS CloudHSM, generate encryption keys, and use the keys to encrypt database volumes.",
			"Configure SSL encryption using AWS Key Management Service (AWS KMS) keys to encrypt database volumes.",
			"Deploy AWS Certificate Manager to generate certificates. Use the certificates to encrypt the database volume."
		]
	},
	{
		"question": "A company used an Amazon RDS for MySQL DB instance during application testing. Before terminating the DB instance at the end of the test cycle, a solutions architect created two backups. The solutions architect created the first backup by using the mysqldump utility to create a database dump. The solutions architect created the second backup by enabling the final DB snapshot option on RDS termination. The company is now planning for a new test cycle and wants to create a new DB instance from the most recent backup. The company has chosen a MySQL-compatible edition of Amazon Aurora to host the DB instance. Which solutions will create the new DB instance? (Select TWO.)",
		"correctAnswersArray": [
			"Upload the RDS snapshot to Amazon S3. Then import the RDS snapshot into Aurora.",
			"Import the RDS snapshot directly into Aurora."
		],
		"wrongAnswersArray": [
			"Upload the database dump to Amazon S3. Then use AWS Database Migration Service (AWS DMS) to import the database dump into Aurora.",
			"Use AWS Database Migration Service (AWS DMS) to import the RDS snapshot into Aurora.",
			"Upload the database dump to Amazon S3. Then import the database dump into Aurora."
		]
	},
	{
		"question": "A company is creating a prototype of an ecommerce website on AWS. The website consists of an Application Load Balancer, an Auto Scaling group of Amazon EC2 instances for web servers, and an Amazon RDS for MySQL DB instance that runs with the Single-AZ configuration. The website is slow to respond during searches of the product catalog. The product catalog is a group of tables in the MySQL database that the company does not update frequently. A solutions architect has determined that the CPU utilization on the DB instance is high when product catalog searches occur. What should the solutions architect recommend to improve the performance of the website during searches of the product catalog?",
		"correctAnswersArray": [
			"Implement an Amazon ElastiCache for Redis cluster to cache the product catalog. Use lazy loading to populate the cache."
		],
		"wrongAnswersArray": [
			"Add an additional scaling policy to the Auto Scaling group to launch additional EC2 instances when database response is slow.",
			"Turn on the Multi-AZ configuration for the DB instance. Configure the EC2 instances to throttle the product catalog queries that are sent to the database.",
			"Migrate the product catalog to an Amazon Redshift database. Use the COPY command to load the product catalog tables."
		]
	},
	{
		"question": "A company has a service that produces event data. The company wants to use AWS to process the event data as it is received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead. How should a solutions architect accomplish this?",
		"correctAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue.<"
		],
		"wrongAnswersArray": [
			"Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.",
			"Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber.",
			"Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently."
		]
	},
	{
		"question": "A company hosts a multi-tier web application that uses an Amazon Aurora MySQL DB cluster for storage. The application tier is hosted on Amazon EC2 instances. The company's IT security guidelines mandate that the database credentials be encrypted and rotated every 14 days. What should a solutions architect do to meet this requirement with the LEAST operational effort?",
		"correctAnswersArray": [
			"Create a new AWS Key Management Service (AWS KMS) encryption key. Use AWS Secrets Manager to create a new secret that uses the KMS key with the appropriate credentials. Associate the secret with the Aurora DB cluster. Configure a custom rotation period of 14 days."
		],
		"wrongAnswersArray": [
			"Create two parameters in AWS Systems Manager Parameter Store one for the user name as a string parameter and one that uses the SecureString type for the password. Select AWS Key Management Service (AWS KMS) encryption for the password parameter, and load these parameters in the application tier. Implement an AWS Lambda function that rotates the password every 14 days.",
			"Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system in all EC2 instances of the application tier. Restrict the access to the file on the file system so that the application can read the file and that only super users can modify the file. Implement an AWS Lambda function that rotates the key in Aurora every 14 days and writes new credentials into the file.",
			"Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon S3 bucket that the application uses to load the credentials. Download the file to the application regularly to ensure that the correct credentials are used. Implement an AWS Lambda function that rotates the Aurora credentials every 14 days and uploads these credentials to the file in the S3 bucket."
		]
	},
	{
		"question": "A company is testing an application that runs on an Amazon EC2 Linux instance. The instance contains a data volume of 500 GB that consists of a single Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) volume. The application is now ready for production use and will be installed on multiple EC2 instances that run in an Auto Scaling group. All instances need access to the data that was stored on the 500 GB volume. The company needs a highly available and fault-tolerant solution that does not introduce any significant changes to the application's code. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use an Amazon Elastic File System (Amazon EFS) file system that is configured with the General Purpose performance mode."
		],
		"wrongAnswersArray": [
			"Use an Amazon FSx for Windows File Server file system that is configured as an SMB file store within a single Availability Zone.",
			"Provision an EC2 instance with NFS server software that is configured with a single 500 GB gp2 volume.",
			"Migrate the data into an Amazon S3 bucket. Use an EC2 instance profile to access the contents of the bucket."
		]
	},
	{
		"question": "A company is creating an architecture for a mobile app that requires minimal latency for its users. The company's architecture consists of Amazon EC2 instances behind an Application Load Balancer running in an Auto Scaling group. The EC2 instances connect to Amazon RDS. Application beta testing showed there was a slowdown when reading the data. However, the metrics indicate that the EC2 instances do not cross any CPU utilization thresholds, How can this issue be addressed?",
		"correctAnswersArray": [
			"Add read replicas for the RDS instances and direct read traffic to the replica."
		],
		"wrongAnswersArray": [
			"Reduce the threshold for CPU utilization in the Auto Scaling group.",
			"Replace the Application Load Balancer with a Network Load Balancer.",
			"Add Multi-AZ support to the RDS instances and direct read traffic to the new EC2 instance."
		]
	},
	{
		"question": "A solutions architect is designing a multi-tier application for a company. The application's users upload images from a mobile device. The application generates a thumbnail of each image and returns a message to the user to confirm that the image was uploaded successfully. The thumbnail generation can take up to 60 seconds, but the company wants to provide a faster response time to its users to notify them that the original image was received. The solutions architect must design the application to synchronously dispatch requests to the different application tiers. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) message queue. As images are uploaded, place a message on the SQS queue for thumbnail generation. Alert the user through an application message that the image was received."
		],
		"wrongAnswersArray": [
			"Create Amazon Simple Notification Service (Amazon SNS) notification topics and subscriptions. Use one subscription with the application to generate the thumbnail after the image upload is complete. Use a second subscription to message the user's mobile app by way of a push notification after thumbnail generation is complete.",
			"Create an AWS Step Functions workflow. Configure Step Functions to handle the orchestration between the application tiers and alert the user when thumbnail generation is complete.",
			"Write a custom AWS Lambda function to generate the thumbnail and alert the user. Use the image upload process as an event source to invoke the Lambda function."
		]
	},
	{
		"question": "A solutions architect is migrating a document management workload to AWS. The workload keeps 7 TiB of contract documents on a shared storage file system and tracks them on an external database. Most of the documents are stored and retrieved eventually for reference in the future. The application cannot be modified during the migration and the storage solution must be highly available. Documents are retrieved and stored by web servers that run on Amazon EC2 instances in an Auto Scaling group.The Auto Scaling group can have up to 12 instances. Which solution meets these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Create an Amazon Elastic File System (Amazon EFS) file system that uses the EFS Standard-Infrequent Access (EFS Standard-IA) storage class. Mount the file system to the EC2 instances in the Auto Scaling group."
		],
		"wrongAnswersArray": [
			"Provision an enhanced networking optimized EC2 instance to serve as a shared NFS storage system.",
			"Create an Amazon S3 bucket that uses the S3 Standard-Infrequent Access (S3 Standard-IA) storage class. Mount the S3 bucket to the EC2 instances in the Auto Scaling group.",
			"Create an SFTP server endpoint by using AWS Transfer for FTP and an Amazon S3 bucket. Configure the EC2 instances in the Auto Scaling group to connect to the SFTP server."
		]
	},
	{
		"question": "A company runs its ecommerce application on AWS. Every new order is published as a message in a RabbitMQ queue that runs on an Amazon EC2 instance in a single Availability Zone. These messages are processed by a different application that runs on a separate EC2 instance. This application stores the details in a PostgreSQL database on another EC2 instance. All the EC2 instances are in the same Availability Zone. The company needs to redesign its architecture to provide the highest availability with the least operational overhead. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL."
		],
		"wrongAnswersArray": [
			"Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.",
			"Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Create a third Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.",
			"Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Create another Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database."
		]
	},
	{
		"question": "A company is running several business applications in three separate PCs within the us-east-1 Region. The applications must be able to communicate between VPCs. The applications also must be able to consistently send hundreds of gigabytes of data each day to a latency-sensitive application that runs in a single on-premises data center. A solutions architect needs to design a network connectivity solution that maximizes cost-effectiveness. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Set up one AWS Direct Connect connection from the data center to AWS. Create a transit gateway, and attach each VPC to the transit gateway. Establish connectivity between the Direct Connect connection and the transit gateway."
		],
		"wrongAnswersArray": [
			"Launch a third-party virtual network appliance in each VPC. Establish an IPsec VPN tunnel between the data center and each virtual appliance.",
			"Set up three AWS Direct Connect connections from the data center to a Direct Connect gateway in us-east-1. Establish connectivity by configuring each VPC to use one of the Direct Connect connections.",
			"Configure three AWS Site-to-Site VPN connections from the data center to AWS. Establish connectivity by configuring one VPN connection for each VPC."
		]
	},
	{
		"question": "A company hosts its static website content from an Amazon S3 bucket in the us-east-1 Region. Content is made available through an Amazon CloudFront origin pointing to that bucket. Cross-Region replication is set up to create a second copy of the bucket in the ap-southeast-1 Region. Management wants a solution that provides greater availability for the website. Which combination of actions should a solutions architect take to increase availability? (Select TWO.)",
		"correctAnswersArray": [
			"Create an additional CloudFront origin pointing to the ap-southeast-1 bucket.",
			"Set up a CloudFront origin group with the us-east-1 bucket as the primary and the ap-southeast-1 bucket as the secondary."
		],
		"wrongAnswersArray": [
			"Configure failover routing in Amazon Route 53.",
			"Add both buckets to the CloudFront origin.",
			"Create a record in Amazon Route 53 pointing to the replica bucket."
		]
	},
	{
		"question": "As part of budget planning, management wants a report of AWS billed items listed by user. The data will be used to create department budgets. A solutions architect needs to determine the most efficient way to obtain this report information. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Create a report in Cost Explorer and download the report."
		],
		"wrongAnswersArray": [
			"Run a query with Amazon Athena to generate the report.",
			"Access the bill details from the billing dashboard and download the bill.",
			"Modify a cost budget in AWS Budgets to alert with Amazon Simple Email Service (Amazon SES)"
		]
	},
	{
		"question": "A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning. Which combination of steps should a solutions architect take to meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.",
			"Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data."
		],
		"wrongAnswersArray": [
			"Configure the application to send the data to Amazon Kinesis Data Firehose.",
			"Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data.",
			"Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email."
		]
	},
	{
		"question": "A recently created startup built a three-tier web application. The front end has static content. The application layer is based on microservices. User data is stored as JSON documents that need to be accessed with low latency. The company expects regular traffic to be low during the first year, with peaks in traffic when it publicizes new features every month. The startup team needs to minimize operational overhead costs. What should a solutions architect recommend to accomplish this?",
		"correctAnswersArray": [
			"Use Amazon S3 static website hosting to store and serve the front end. Use Amazon API Gateway and AWS Lambda functions for the application layer. Use Amazon DynamoDB to store user data."
		],
		"wrongAnswersArray": [
			"Use Amazon S3 static website hosting to store and serve the front end. Use AWS Elastic Beanstalk for the application layer. Use Amazon DynamoDB to store user data.",
			"Use Amazon S3 static website hosting to store and serve the front end. Use Amazon Elastic Kubernetes Service (Amazon EKS) for the application layer. Use Amazon DynamoDB to store user data.",
			"Use Amazon S3 static website hosting to store and serve the front end. Use Amazon API Gateway and AWS Lambda functions for the application layer. Use Amazon RDS with read replicas to store user data."
		]
	},
	{
		"question": "A company's application is running on Amazon EC2 instances within an Auto Scaling group behind an Elastic Load Balancer. Based on the application's history, the company anticipates a spike in traffic during a holiday each year. A Solutions architect must design a strategy to ensure that the Auto Scaling group proactively increases capacity to minimize any performance impact on application users. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create a recurring scheduled action to scale up the Auto Scaling group before the expected period of peak demand."
		],
		"wrongAnswersArray": [
			"Configure an Amazon Simple Notification Service (Amazon SNS) notification to send alerts when there are autoscaling EC2 INSTANCE LAUNCH events.",
			"Increase the minimum and maximum number of EC2 instances in the Auto Scaling group during the peak demand period.",
			"Create an Amazon CloudWatch alarm to scale up the EC2 instances when CPU utilization exceeds 90%."
		]
	},
	{
		"question": "A monolithic application was recently migrated to AWS and is now running on a single Amazon EC2 instance. Due to application limitations, it is not possible to use automatic scaling to scale out the application. The chief technology officer (CTO) wants an automated solution to restore the EC2 instance in the unlikely event the underlying hardware fails. What would allow for automatic recovery of the EC2 instance as quickly as possible?",
		"correctAnswersArray": [
			"Configure an Amazon CloudWatch alarm that triggers the recovery of the EC2 instance if it becomes impaired."
		],
		"wrongAnswersArray": [
			"Configure AWS CloudTrail to monitor the health of the EC2 instance, and if it becomes impaired, trigger instance recovery.",
			"Configure an Amazon CloudWatch alarm to trigger an SNS message that alerts the CTO when the EC2 instance is impaired.",
			"Configure an Amazon EventBridge event to trigger an AWS Lambda function once an hour that checks the health of the EC2 instance and triggers instance recovery if the EC2 instance is unhealthy."
		]
	},
	{
		"question": "A company hosts a multi-tier web application on Amazon Linux Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The company observes that the Auto Scaling group launches more On-Demand Instances when the application's end users access high volumes of static web content. The company wants to optimize cost. What should a solutions architect do to redesign the application MOST cost-effectively?",
		"correctAnswersArray": [
			"Create an Amazon CloudFront distribution to host the static web contents from an Amazon S3 bucket."
		],
		"wrongAnswersArray": [
			"Update the Auto Scaling group to scale by launching Spot Instances instead of On-Demand Instances.",
			"Update the Auto Scaling group to use Reserved Instances instead of On-Demand Instances.",
			"Create an AWS Lambda function behind an Amazon API Gateway API to host the static website contents."
		]
	},
	{
		"question": "A company's website is used to sell products to the public. The site runs on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). There is also an Amazon CloudFront distribution, and AWS WAF is being used to protect against SQL injection attacks. The ALB is the origin for the CloudFront distribution. A recent review of security logs revealed an external malicious IP that needs to be blocked from accessing the website. What should a solutions architect do to protect the application?",
		"correctAnswersArray": [
			"Modify the configuration of AWS WAF to add an IP match condition to block the malicious IP address."
		],
		"wrongAnswersArray": [
			"Modify the network ACL for the EC2 instances in the target groups behind the ALB to deny the malicious IP address.",
			"Modify the network ACL on the CloudFront distribution to add a deny rule for the malicious IP address.",
			"Modify the security groups for the EC2 instances in the target groups behind the ALB to deny the malicious IP address."
		]
	},
	{
		"question": "A company needs to store data from its healthcare application. The application's data frequently changes. A new regulation requires audit access at all levels of the stored data. The company hosts the application on an on-premises infrastructure that is running out of storage capacity. A solutions architect must securely migrate the existing data to AWS while satisfying the new regulation. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use AWS DataSync to move the existing data to Amazon S3. Use AWS Cloud Trail to log data events."
		],
		"wrongAnswersArray": [
			"Use Amazon S3 Transfer Acceleration to move the existing data to Amazon S3. Use AWS CloudTrail to log data events.",
			"Use AWS Snowcone to move the existing data to Amazon S3. Use AWS CloudTrail to log management events.",
			"Use AWS Storage Gateway to move the existing data to Amazon S3. Use AWS CloudTrail to log management events."
		]
	},
	{
		"question": "A company uses an Amazon S3 bucket to store static images for its website. The company configured permissions to allow access to Amazon S3 objects by privileged users only. What should a solutions architect do to protect against data loss? (Select TWO.)",
		"correctAnswersArray": [
			"Enable versioning on the S3 bucket."
		],
		"wrongAnswersArray": [
			"Enable server-side encryption on the S3 bucket.",
			"Enable access logging on the S3 bucket.",
			"Configure an S3 lifecycle rule to transition objects to Amazon S3 Glacier.",
			"Use MFA Delete to require multi-factor authentication to delete an object."
		]
	},
	{
		"question": "A company needs to connect its on-premises data center network to a new VPC. The data center network has a 100 Mbps symmetrical internet connection. An application that is running on premises will transfer multiple gigabytes of data each day. The application will use an Amazon Kinesis Data Firehose delivery stream for processing. What should a solutions architect recommend for maximum performance?",
		"correctAnswersArray": [
			"Use AWS PrivateLink to create an interface VPC endpoint for Kinesis Data Firehose in the VPC. Set up a 1 Gps AWS Direct Connect connection between the on-premises network and AWS. Use the PrivateLink endpoint to send the data from on premises to Kinesis Data Firehose."
		],
		"wrongAnswersArray": [
			"Create a VPC peering connection between the on-premises network and the VPC. Configure routing for the on-premises network to use the VPC peering connection.",
			"Create an AWS Site-to-Site VPN connection between the on-premises network and the VPC. Configure BGP routing between the customer gateway and the virtual private gateway. Use the VPN connection to send the data from on premises to Kinesis Data Firehose.",
			"Procure an AWS Snowball Edge Storage Optimized device. After several days' worth of data has accumulated, copy the data to the device and ship the device to AWS for expedited transfer to Kinesis Data Firehose. Repeat as needed."
		]
	},
	{
		"question": "A company recently migrated its entire IT environment to the AWS Cloud. The company discovers that users are provisioning oversized Amazon EC2 instances and modifying security group rules without using the appropriate change control process. A solutions architect must devise a strategy to track and audit these inventory and configuration changes. Which actions should the solutions architect take to meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"Enable AWS CloudTrail and use it for auditing."
		],
		"wrongAnswersArray": [
			"Enable AWS Trusted Advisor and reference the security dashboard.",
			"Restore previous resource configurations with an AWS CloudFormation template.",
			"Use data lifecycle policies for the Amazon EC2 instances.",
			"Enable AWS Config and create rules for auditing and compliance purposes."
		]
	},
	{
		"question": "A company is creating an application that runs on containers in a VPC. The application stores and accesses data in an Amazon S3 bucket. During the development phase, the application will store and access 1 TB of data in Amazon S3 each day. The company wants to minimize costs and wants to prevent traffic from traversing the internet whenever possible. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create a gateway VPC endpoint for Amazon S3. Associate this endpoint with all route tables in the VPC."
		],
		"wrongAnswersArray": [
			"Enable S3 Intelligent-Tiering for the S3 bucket.",
			"Create an interface endpoint for Amazon S3 in the VPC. Associate this endpoint with all route tables in the VPC.",
			"Enable S3 Transfer Acceleration for the S3 bucket."
		]
	},
	{
		"question": "A gaming company is moving its public scoreboard from a data center to the AWS Cloud. The company uses Amazon EC2 Windows Server instances behind an Application Load Balancer to host its dynamic application. The company needs a highly available storage solution for the application. The application consists of static files and dynamic server-side code. Which combination of steps should a solutions architect take to meet these requirements? (Select TWO.)",
		"correctAnswersArray": [
			"Store the static files on Amazon S3. Use Amazon CloudFront to cache objects at the edge.",
			"Store the server-side code on Amazon FSx for Windows File Server. Mount the FSx for Windows File Server volume on each EC2 instance to share the files."
		],
		"wrongAnswersArray": [
			"Store the static files on Amazon S3. Use Amazon ElastiCache to cache objects at the edge.",
			"Store the server-side code on a General Purpose SSD (gp2) Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume on each EC2 instance to share the files.",
			"Store the server-side code on Amazon Elastic File System (Amazon EFS). Mount the EFS volume on each EC2 instance to share the files."
		]
	},
	{
		"question": "A company hosts an application on AWS. The application uses AWS Lambda functions and stores data in Amazon DynamoDB tables. The Lambda functions are connected to a VPC that does not have internet access. The traffic to access DynamoDB must not travel across the internet. The application must have write access to only specific DynamoDB tables. Which combination of steps should a solutions architect take to meet these requirements? (Select TWO.)",
		"correctAnswersArray": ["Create a gateway VPC endpoint for DynamoDB that is associated with the Lambda VPC. Ensure that the Lambda execution role can access the gateway VPC endpoint.", "Create a resource-based IAM policy to grant write access to only the specific DynamoDB tables. Attach the policy to the DynamoDB tables.",
		],
		"wrongAnswersArray": [
			"Attach a security group to the interface VPC endpoint to allow write access to only the specific DynamoDB tables.",
			"Attach a VPC endpoint policy for DynamoDB to allow write access to only the specific DynamoDB tables.",
			"Create an interface VPC endpoint for DynamoDB that is associated with the Lambda VPC. Ensure that the Lambda execution role can access the interface VPC endpoint."
		]
	},
	{
		"question": "A meteorological startup company has a custom web application to sell weather data to its users online. The company uses Amazon DynamoDB to store its data and wants to build a new service that sends an alert to the managers of four internal teams every time a new weather event is recorded. The company does not want this new service to affect the performance of the current application. What should a solutions architect do to meet these requirements with the LEAST amount of operational overhead?",
		"correctAnswersArray": [
			"Use DynamoDB transactions to write new event data to the table. Configure the transactions to notify internal teams."
		],
		"wrongAnswersArray": [
			"Enable Amazon DynamoDB Streams on the table. Use triggers to write to a single Amazon Simple Notification Service (Amazon SNS) topic to which the teams can subscribe.",
			"Add a custom attribute to each record to flag new items. Write a cron job that scans the table every minute foritems that are new and notifies an Amazon Simple Queue Service (Amazon SQS) queue to which the teamscan subscribe.",
			"Have the current application publish a message to four Amazon Simple Notification Service (Amazon SNS) topics. Have each team subscribe to one topic."
		]
	},
	{
		"question": "A company has two applications a sender application that sends messages with payloads to be processed and a processing application intended to receive the messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed. If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages. Which solution meets these requirements and is the MOST operationally efficient?",
		"correctAnswersArray": [
			"Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQ) queue. Configure a dead-letter queue to collect the messages that failed to process."
		],
		"wrongAnswersArray": [
			"Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively.",
			"Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).",
			"Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic."
		]
	},
	{
		"question": "A company wants its public web application to run on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). The application must use a publicly trusted SSL certificate. Which solution will meet these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Provision a public SSL/TLS certificate through AWS Certificate Manager (ACM). Configure the new certificate on the HTTPS listener for the ALB."
		],
		"wrongAnswersArray": [
			"Use AWS Certificate Manager Private Certificate Authority to issue an SSL/TLS certificate. Configure the new certificate on the HTTPS listener for the ALB.",
			"Create a self-signed certificate on one of the EC2 instances in the Auto Scaling group. Export the certificate, and configure it on the HTTPS listener for the ALB.",
			"Deploy an EC2-hosted certificate authority (CA). Import a trusted root certificate. Issue a new SSL/TLS certificate. Configure the new certificate on the HTTPS listener for the ALB."
		]
	},
	{
		"question": "A company runs an application that receives data from thousands of geographically dispersed remote devices that use UDP. The application processes the data immediately and sends a message back to the device if necessary. No data is stored. The company needs a solution that minimizes latency for the data transmission from the devices. The solution also must provide rapid failover to another AWS Region. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use AWS Global Accelerator. Create a Network Load Balancer (NLB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the NLB. Process the data in Amazon ECS."
		],
		"wrongAnswersArray": [
			"Use AWS Global Accelerator. Create an Application Load Balancer (ALB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB. Process the data in Amazon ECS.",
			"Configure an Amazon Route 53 failover routing policy. Create an Application Load Balancer (ALB) in each of the two Regions. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB. Process the data in Amazon ECS.",
			"Configure an Amazon Route 53 failover routing policy. Create a Network Load Balancer (NLB) in each of the two Regions. Configure the NLB to invoke an AWS Lambda function to process the data."
		]
	},
	{
		"question": "A media company collects and analyzes user activity data on premises. The company wants to migrate this capability to AWS. The user activity data store will continue to grow and will be petabytes in size. The company needs to build a highly available data ingestion solution that facilitates on-demand analytics of existing data and new data with SQL. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Send activity data to an Amazon Kinesis Data Firehose delivery stream. Configure the stream to deliver the data to an Amazon Redshift cluster."
		],
		"wrongAnswersArray": [
			"Send activity data to an Amazon Kinesis data stream. Configure the stream to deliver the data to an Amazon S3 bucket.",
			"Place activity data in an Amazon S3 bucket. Configure Amazon S3 to run an AWS Lambda function on the data as the data arrives in the S3 bucket.",
			"Create an ingestion service on Amazon EC2 instances that are spread across multiple Availability Zones. Configure the service to forward data to an Amazon RDS Multi-AZ database."
		]
	},
	{
		"question": "A company wants to measure the effectiveness of its recent marketing campaigns. The company performs batch processing on .csv files of sales data and stores the results in an Amazon S3 bucket once every hour. The S3 bucket contains petabytes of objects. The company runs one-time queries in Amazon Athena to determine which products are most popular on a particular date for a particular region. Queries sometimes fail or take longer than expected to finish running. Which actions should a solutions architect take to improve the query performance and reliability? (Select TWO.)",
		"correctAnswersArray": ["Use an AWS Glue extract, transform, and load (ETL) process to convert the .csv files into Apache Parquet format.", "Partition the data by date and region in Amazon S3.",],
		"wrongAnswersArray": [
			"Use Amazon Kinesis Data Analytics to run the queries as part of the batch processing operation.",
			"Store the files as large, single objects in Amazon S3.",
			"Reduce the S3 object sizes to less than 128 MB.",


		]
	},
	{
		"question": "A company manages its own Amazon EC2 instances that run MySQL databases. The company is manually managing replication and scaling as demand increases or decreases. The company needs a new solution that simplifies the process of adding or removing compute capacity to or from its database tier as needed. The solution also must offer improved performance, scaling, and durability with minimal effort from operations. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Migrate the databases to Amazon Aurora Serverless for Aurora MySQL."
		],
		"wrongAnswersArray": [
			"Create an EC2 Auto Scaling group for the database tier. Migrate the existing databases to the new environment.",
			"Combine the databases into one larger MySQL database. Run the larger database on larger EC2 instances.",
			"Migrate the databases to Amazon Aurora Serverless for Aurora PostgreSQL."
		]
	},
	{
		"question": "A solutions architect plans to convert a company's monolithic web application into a multi-tier application. The company wants to avoid managing its own infrastructure. The minimum requirements for the web application are high availability, scalability, and regional low latency during peak hours. The solution should also store and retrieve data with millisecond latency using the application's API. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use Amazon API Gateway with an edge-optimized API endpoint, AWS Lambda for compute, and Amazon DynamoDB as the data store."
		],
		"wrongAnswersArray": [
			"Use AWS Fargate to host the web application with backend Amazon RDS Multi-AZ DB instances.",
			"Use an Amazon CloudFront distribution that points to an Elastic Load Balancer with an Amazon EC2 Auto Scaling group, along with Amazon RDS Multi-AZ DB instances.",
			"Use an Amazon Route 53 routing policy with geolocation that points to an Amazon S3 bucket with static website hosting and Amazon DynamoDB as the data store."
		]
	},
	{
		"question": "A company is using a centralized AWS account to store log data in various Amazon S3 buckets. A solutions architect needs to ensure that the data is encrypted at rest before the data is uploaded to the S3 buckets. The data also must be encrypted in transit. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use client-side encryption to encrypt the data that is being uploaded to the S3 buckets."
		],
		"wrongAnswersArray": [
			"Enable the security option to encrypt the S3 buckets through the use of a default AWS Key Management Service (AWS KMS) key.",
			"Create bucket policies that require the use of server-side encryption with S3 managed encryption keys (SSE.S3) for S3 uploads.",
			"Use server-side encryption to encrypt the data that is being uploaded to the S3 buckets."
		]
	},
	{
		"question": "A company allows its developers to attach existing IAM policies to existing IAM roles to enable faster experimentation and agility. However, the security operations team is concerned that the developers could attach the existing administrator policy, which would allow the developers to circumvent any other security policies. How should a solutions architect address this issue?",
		"correctAnswersArray": [
			"Set an IAM permissions boundary on the developer IAM role that explicitly denies attaching the administrator policy."
		],
		"wrongAnswersArray": [
			"Use service control policies to disable IAM activity across all accounts in the organizational unit.",
			"Create an Amazon SNS topic to send an alert every time a developer creates a new policy.",
			"Prevent the developers from attaching any policies and assign all IAM duties to the security operations team."
		]
	},
	{
		"question": "A company is planning to build a high performance computing (HPC) workload as a service solution that is hosted on AWS. A group of 16 Amazon EC2 Linux instances requires the lowest possible latency for node-to-node communication. The instances also need a shared block device volume for high-performing storage. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use a cluster placement group. Attach a single Provisioned OPS SSD Amazon Elastic Block Store (Amazon EBS) volume to all the instances by using Amazon EBS Multi-Attach."
		],
		"wrongAnswersArray": [
			"Use a partition placement group. Create shared file systems across the instances by using Amazon Elastic File System (Amazon EFS).",
			"Use a spread placement group. Attach a single Provisioned IOPS SSD Amazon Elastic Block Store (Amazon EBS) volume to all the instances by using Amazon EBS Multi-Attach.",
			"Use a cluster placement group. Create shared file systems across the instances by using Amazon Elastic File System (Amazon EFS)."
		]
	},
	{
		"question": "A disaster response team is using drones to collect images of recent storm damage. The response team's laptops lack the storage and compute capacity to transfer the images and process the data. While the team has Amazon EC2 instances for processing and Amazon S3 buckets for storage, network connectivity is intermittent and unreliable. The images need to be processed to evaluate the damage. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Use AWS Snowball Edge devices to process and store the images."
		],
		"wrongAnswersArray": [
			"Upload the images to Amazon Simple Queue Service (Amazon SQS) during intermittent connectivity to EC2 instances.",
			"Configure Amazon Kinesis Data Firehose to create multiple delivery streams aimed separately at the S3 buckets for storage and the EC2 instances for processing the images.",
			"Use AWS Storage Gateway pre-installed on a hardware appliance to cache the images locally for Amazon S3 to process the images when connectivity becomes available."
		]
	},
	{
		"question": "A solutions architect must secure a VPC network that hosts Amazon EC2 instances. The EC2 instances contain highly sensitive data and run in a private subnet. According to company policy, the EC2 instances that run in the PC can access only approved third-party software repositories on the internet for software product updates that use the third party's URL. Other internet traffic must be blocked. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Configure an Application Load Balancer (ALB) in front of the EC2 instances. Direct all outbound traffic to the ALB. Use a URL-based rule listener in the ALB's target group for outbound access to the internet."
		],
		"wrongAnswersArray": [
			"Implement strict inbound security group rules. Configure an outbound rule that allows traffic only to the authorized software repositories on the internet by specifying the URLs.",
			"Set up an AWS WAF web ACL. Create a custom set of rules that filter traffic requests based on source and destination IP address range sets.",
			"Update the route table for the private subnet to route the outbound traffic to an AWS Network Firewall firewall. Configure domain list rule groups."
		]
	},
	{
		"question": "A solutions architect is performing a security review of a recently migrated workload. The workload is a web application that consists of Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The solutions architect must improve the security posture and minimize the impact of a DDoS attack on resources. Which solution is MOST effective?",
		"correctAnswersArray": [
			"Configure an AWS WAF ACL with rate-based rules. Create an Amazon CloudFront distribution that points to the Application Load Balancer. Enable the WAF ACL on the CloudFront distribution."
		],
		"wrongAnswersArray": [
			"Create a custom AWS Lambda function that adds identified attacks into a common vulnerability pool to capture a potential DoS attack. Use the identified information to modify a network ACL to block access.",
			"Enable VPC Flow Logs and store them in Amazon S3. Create a custom AWS Lambda function that parses the logs looking for a DoS attack. Modify a network ACL to block identified source IP addresses.",
			"Enable Amazon GuardDuty and configure findings written to Amazon CloudWatch. Create an event with CloudWatch Events for DoS alerts that triggers Amazon Simple Notification Service (Amazon SNS). Have Amazon SNS invoke a custom AWS Lambda function that parses the logs, looking for a DDoS attack. Modify a network ACL to block identified source IP addresses."
		]
	},
	{
		"question": "A solutions architect must design a highly available infrastructure for a website. The website is powered by Windows web servers that run on Amazon EC2 instances. The solutions architect must implement a solution that can mitigate a large-scale DDoS attack that originates from thousands of IP addresses. Downtime is not acceptable for the website. Which actions should the solutions architect take to protect the website from such an attack? (Choose two.)",
		"correctAnswersArray": [
			"Use AWS Shield Advanced to stop the DDoS attack.",
			"Configure the website to use Amazon CloudFront for both static and dynamic content."
		],
		"wrongAnswersArray": [
			"Configure Amazon GuardDuty to automatically block the attackers.",
			"Use an AWS Lambda function to automatically add attacker IP addresses to VPC network ACLs.",
			"Use EC2 Spot Instances in an Auto Scaling group with a target tracking scaling policy that is set to 80% CPU utilization."
		]
	},
	{
		"question": "A social media company allows users to upload images to its website. The website runs on Amazon EC2 instances. During upload requests, the website resizes the images to a standard size and stores the resized images in Amazon S3. Users are experiencing slow upload requests to the website. The company needs to reduce coupling within the application and improve website performance. A solutions architect must design the most operationally eficient process for image uploads. Which combination of actions should the solutions architect take to meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Configure S3 Event Notifications to invoke an AWS Lambda function when an image is uploaded. Use the function to resize the image."
		],
		"wrongAnswersArray": [
			"Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function on a schedule to resize uploaded images.",
			"Configure the web server to upload the original images to Amazon S3.",
			"Configure the application to upload images to S3 Glacier.",
			"Configure the application to upload images directly from each user's browser to Amazon S3 through the use of a presigned URL."
		]
	},
	{
		"question": "A company stores its application logs in an Amazon CloudWatch Logs log group. A new policy requires the company to store all application logs in Amazon OpenSearch Service (Amazon Elasticsearch Service) in near-real time. Which solution will meet this requirement with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Configure a CloudWatch Logs subscription to stream the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service)."
		],
		"wrongAnswersArray": [
			"Install and Configure Amazon Kinesis Agent on each application server to deliver the logs to Amazon Kinesis Data Streams. Configure Kinesis Data Streams to deliver the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).",
			"Create an Amazon Kinesis Data Firehose delivery stream. Configure the log group as the delivery streams sources. Configure Amazon OpenSearch Service (Amazon Elasticsearch Service) as the delivery stream's destination.",
			"Create an AWS Lambda function. Use the log group to invoke the function to write the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service)."
		]
	},
	{
		"question": "A company receives 10 TB of instrumentation data each day from several machines located at a single factory. The data consists of JSON files stored on a storage area network (SAN) in an on-premises data center located within the factory. The company wants to send this data to Amazon S3 where it can be accessed by several additional systems that provide critical near-real-time analytics. A secure transfer is important because the data is considered sensitive. Which solution offers the MOST reliable data transfer?",
		"correctAnswersArray": [
			"AWS DataSync over AWS Direct Connect"
		],
		"wrongAnswersArray": [
			"AWS DataSync over public internet",
			"AWS Database Migration Service (AWS DMS) over AWS Direct Connect",
			"AWS Database Migration Service (AWS DMS) over public internet"
		]
	},
	{
		"question": "A company wants to move a multi-tiered application from on premises to the AWS Cloud to improve the application's performance. The application consists of application tiers that communicate with each other by way of RESTful services. Transactions are dropped when one tier becomes overloaded. A solutions architect must design a solution that resolves these issues and modernizes the application. Which solution meets these requirements and is the MOST operationally efficient?",
		"correctAnswersArray": [
			"Use Amazon API Gateway and direct transactions to the AWS Lambda functions as the application layer. Use Amazon Simple Queue Service (Amazon SQS) as the communication layer between application services."
		],
		"wrongAnswersArray": [
			"Use Amazon Simple Queue Service (Amazon SQS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SQS queue length and scale up when communication failures are detected.",
			"Use Amazon Simple Noti+cation Service (Amazon SNS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SNS queue length and scale up and down as required.",
			"Use Amazon CloudWatch metrics to analyze the application performance history to determine the servers' peak utilization during the performance failures. Increase the size of the application server's Amazon EC2 instances to meet the peak requirements."
		]
	},
	{
		"question": "A solutions architect is designing a new hybrid architecture to extend a company's on-premises infrastructure to AWS.The company requires a highly available connection with consistent low latency to an AWS Region.The company needs to minimize costs and is willing to accept slower trafic if the primary connection fails.What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the primary Direct Connect connection fails."
		],
		"wrongAnswersArray": [
			"Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails.",
			"Provision a VPN tunnel connection to a Region for private connectivity.Provision a second VPN tunnel for private connectivity and as a backup if the primary VPN connection fails.",
			"Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to the same Region as a backup if the primary Direct Connect connection fails."
		]
	},
	{
		"question": "A company is implementing a shared storage solution for a gaming application that is hosted in an on-premises data center. The company needs the ability to use Lustre clients to access data. The solution must be fully managed. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system."
		],
		"wrongAnswersArray": [
			"Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.",
			"Create an Amazon EC2 Windows instance. Install and Configure a Windows file share role on the instance. Connect the application server to the file share.",
			"Create an Amazon Elastic File System (Amazon EFS) file system, and Configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system."
		]
	},
	{
		"question": "A company is building a web-based application running on Amazon EC2 instances in multiple Availability Zones. The web application will provide access to a repository of text documents totaling about 900 TB in size. The company anticipates that the web application will experience periods of high demand. A solutions architect must ensure that the storage component for the text documents can scale to meet the demand of the application at all times. The company is concerned about the overall cost of the solution. Which storage solution meets these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Amazon S3"
		],
		"wrongAnswersArray": [
			"Amazon Elastic File System (Amazon EFS)",
			"Amazon OpenSearch Service (Amazon Elasticsearch Service)",
			"Amazon Elastic Block Store (Amazon EBS)"
		]
	},
	{
		"question": "A company is running a business-critical web application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL database that is deployed in a single Availability Zone.The company wants the application to be highly available with minimum downtime and minimum loss of data. Which solution will meet these requirements with the LEAST operational effort?",
		"correctAnswersArray": [
			"Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database."
		],
		"wrongAnswersArray": [
			"Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure.",
			"Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database.",
			"Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross- Region Replication."
		]
	},
	{
		"question": "A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL certificate, which is on each instance to perform SSL termination. There has been an increase in traffic recently, and the operations team determined that SSL encryption and decryption is causing the compute capacity of the web servers to reach their maximum limit. What should a solutions architect do to increase the application's performance?",
		"correctAnswersArray": [
			"Import the SSL certificate into AWS certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the SSL certificate from ACM."
		],
		"wrongAnswersArray": [
			"Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and Configure it to direct connections to the existing EC2 instances.",
			"Create an Amazon S3 bucket Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to reference the bucket for SSL termination.",
			"Create a new SSL certificate using AWS certificate Manager (ACM). Install the ACM certificate on each instance."
		]
	},
	{
		"question": "A company is preparing to store confidential data in Amazon S3. For compliance reasons, the data must be encrypted at rest. Encryption key usage must be logged for auditing purposes. Keys must be rotated every year. Which solution meets these requirements and is the MOST operationally efficient?",
		"correctAnswersArray": [
			"Server-side encryption with AWS KMS keys (SSE-KMS) with automatic rotation"
		],
		"wrongAnswersArray": [
			"Server-side encryption with AWS KMS keys (SSE-KMS) with manual rotation",
			"Server-side encryption with Amazon S3 managed keys (SSE-S3)",
			"Server-side encryption with customer-provided keys (SSE-C)"
		]
	},
	{
		"question": "A company runs a photo processing application that needs to frequently upload and download pictures from Amazon S3 buckets that are located in the same AWS Region. A solutions architect has noticed an increased cost in data transfer fees and needs to implement a solution to reduce these costs. How can the solutions architect meet this requirement?",
		"correctAnswersArray": [
			"Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets."
		],
		"wrongAnswersArray": [
			"Deploy Amazon API Gateway into a public subnet and adjust the route table to route S3 calls through it.",
			"Deploy a NAT gateway into a public subnet and attach an endpoint policy that allows access to the S3 buckets.",
			"Deploy the application into a public subnet and allow it to route through an internet gateway to access the S3 buckets."
		]
	},
	{
		"question": "A company runs its two-tier ecommerce website on AWS. The web tier consists of a load balancer that sends traffic to Amazon EC2 instances. The database tier uses an Amazon RDS DB instance. The EC2 instances and the RDS DB instance should not be exposed to the public internet. The EC2 instances require internet access to complete payment processing of orders through a third-party web service. The application must be highly available. Which combination of configuration options will meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Configure a VPC with two public subnets, two private subnets, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnets.",
			"Use an Auto Scaling group to launch the EC2 instances in private subnets. Deploy an RDS Multi-AZ DB instance in private subnets."
		],
		"wrongAnswersArray": [
			"Configure a VPC with two private subnets and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the private subnets.",
			"Configure a VPC with one public subnet, one private subnet, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnet.",
			"Use an Auto Scaling group to launch the EC2 instances in public subnets across two Availability Zones. Deploy an RDS Multi-AZ DB instance in private subnets."
		]
	},
	{
		"question": "A company wants to run applications in containers in the AWS Cloud. These applications are stateless and can tolerate disruptions within the underlying infrastructure. The company needs a solution that minimizes cost and operational overhead. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Use Spot Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group."
		],
		"wrongAnswersArray": [
			"Use Spot Instances in an Amazon EC2 Auto Scaling group to run the application containers.",
			"Use On-Demand Instances in an Amazon EC2 Auto Scaling group to run the application containers.",
			"Use On-Demand Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group."
		]
	},
	{
		"question": "51) An application allows users at a company's headquarters to access product data. The product data is stored in an Amazon RDS MySQL DB instance. The operations team has isolated an application performance slowdown and wants to separate read traffic from write traffic. A solutions architect needs to optimize the application's performance quickly. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Create read replicas for the database. Configure the read replicas with the same compute and storage resources as the source database."
		],
		"wrongAnswersArray": [
			"Create read replicas for the database. Configure the read replicas with half of the compute and storage resources as the source database.",
			"Change the existing database to a Multi-AZ deployment. Serve the read requests from the secondary Availability Zone.",
			"Change the existing database to a Multi-AZ deployment. Serve the read requests from the primary Availability Zone."
		]
	},
	{
		"question": "A company is storing sensitive user information in an Amazon S3 bucket. The company wants to provide secure access to this bucket from the application tier running on Amazon EC2 instances inside a VPC. Which combination of steps should a solutions architect take to accomplish this? (Choose two.)",
		"correctAnswersArray": ["Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.", "Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket",
			"Configure a VPC gateway endpoint for Amazon S3 within the VPC.",
		],
		"wrongAnswersArray": [
			"Create a bucket policy to make the objects in the S3 bucket public.",
			"Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.",
			"Configure a VPC gateway endpoint for Amazon S3 within the VPC.",
			"Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket."
		]
	},
	{
		"question": "An application runs on Amazon EC2 instances across multiple Availability Zones. The instances run in an Amazon EC2 Auto Scaling group behind an Application Load Balancer. The application performs best when the CPU utilization of the EC2 instances is at or near 40%. What should a solutions architect do to maintain the desired performance across all instances in the group?",
		"correctAnswersArray": [
			"Use a target tracking policy to dynamically scale the Auto Scaling group."
		],
		"wrongAnswersArray": [
			"Use scheduled scaling actions to scale up and scale down the Auto Scaling group.",
			"Use a simple scaling policy to dynamically scale the Auto Scaling group.",
			"Use an AWS Lambda function to update the desired Auto Scaling group capacity."
		]
	},
	{
		"question": "A company has implemented a self-managed DNS solution on three Amazon EC2 instances behind a Network Load Balancer (NLB) in the uswest- 2 Region. Most of the company's users are located in the United States and Europe. The company wants to improve the performance and availability of the solution. The company launches and Configures three EC2 instances in the eu-west-1 Region and adds the EC2 instances as targets for a new NLB. Which solution can the company use to route traffic to all the EC2 instances?",
		"correctAnswersArray": [
			"Create a standard accelerator in AWS Global Accelerator. Create endpoint groups in us-west-2 and eu-west-1. Add the two NLBs as endpoints for the endpoint groups."
		],
		"wrongAnswersArray": [
			"Replace the two NLBs with two Application Load Balancers (ALBs). Create an Amazon Route 53 latency routing policy to route requests to one of the two ALBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.",
			"Create an Amazon Route 53 geolocation routing policy to route requests to one of the two NLBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.",
			"Attach Elastic IP addresses to the six EC2 instances. Create an Amazon Route 53 geolocation routing policy to route requests to one of the six EC2 instances. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution's origin."
		]
	},
	{
		"question": "An image-processing company has a web application that users use to upload images. The application uploads the images into an Amazon S3 bucket. The company has set up S3 event notifications to publish the object creation events to an Amazon Simple Queue Service (Amazon SQS) standard queue. The SQS queue serves as the event source for an AWS Lambda function that processes the images and sends the results to users through email.Users report that they are receiving multiple email messages for every uploaded image. A solutions architect determines that SQS messages are invoking the Lambda function more than once, resulting in multiple email messages. What should the solutions architect do to resolve this issue with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Increase the visibility timeout in the SQS queue to a value that is greater than the total of the function timeout and the batch window timeout."
		],
		"wrongAnswersArray": [
			"Set up long polling in the SQS queue by increasing the ReceiveMessage wait time to 30 seconds.",
			"Change the SQS standard queue to an SQS FIFO queue. Use the message deduplication ID to discard duplicate messages.",
			"Modify the Lambda function to delete each message from the SQS queue immediately after the message is read before processing."
		]
	},
	{
		"question": "A company has an application that generates a large number of files, each approximately 5 MB in size. The files are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted. Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce. The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days. Which storage solution is MOST cost-effective?",
		"correctAnswersArray": [
			"Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Delete the files 4 years after object creation."
		],
		"wrongAnswersArray": [
			"Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation.",
			"Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object creation. Delete the files 4 years after object creation.",
			"Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation."
		]
	},
	{
		"question": "A company has an AWS Glue extract, transform, and load (ETL) job that runs every day at the same time. The job processes XML data that is in an Amazon S3 bucket. New data is added to the S3 bucket every day. A solutions architect notices that AWS Glue is processing all the data during each run. What should the solutions architect do to prevent AWS Glue from reprocessing old data?",
		"correctAnswersArray": [
			"Edit the job to use job bookmarks."
		],
		"wrongAnswersArray": [
			"Edit the job to delete data after the data is processed.",
			"Edit the job by setting the NumberOfWorkers field to 1.",
			"Use a FindMatches machine learning (ML) transform."
		]
	},
	{
		"question": "A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB instance. The company wants a secure method for the web servers to connect to the database while meeting a security requirement to rotate user credentials frequently. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow the web servers to access AWS Secrets Manager."
		],
		"wrongAnswersArray": [
			"Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to allow the web servers to retrieve credentials and access the database.",
			"Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM permissions to allow the web servers to access OpsCenter.",
			"Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on the web server file system. The web server should be able to decrypt the files and access the database."
		]
	},
	{
		"question": "A global company is using Amazon API Gateway to design REST APIs for its loyalty club users in the us-east-1 Region and the ap-southeast-2 Region. A solutions architect must design a solution to protect these API Gateway managed REST APIs across multiple accounts from SQL injection and cross-site scripting attacks. Which solution will meet these requirements with the LEAST amount of administrative effort?",
		"correctAnswersArray": [
			"Set up AWS Firewall Manager in both Regions. Centrally Configure AWS WAF rules."
		],
		"wrongAnswersArray": [
			"Set up AWS Shield in one of the Regions. Associate Regional web ACLs with an API stage.",
			"Set up AWS WAF in both Regions. Associate Regional web ACLs with an API stage.",
			"Set up AWS Shield in both Regions. Associate Regional web ACLs with an API stage."
		]
	},
	{
		"question": "A company hosts its web applications in the AWS Cloud. The company Configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate. What should a solutions architect recommend to meet this requirement?",
		"correctAnswersArray": [
			"Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Con+g reports a noncompliant resource."
		],
		"wrongAnswersArray": [
			"Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Noti+cation Service(Amazon SNS).",
			"Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Noti+cation Service(Amazon SNS).",
			"Add a rule in ACM to publish a custom message to an Amazon Simple Noti+cation Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire."
		]
	},
	{
		"question": "A company's dynamic website is hosted using on-premises servers in the United States. The company is launching its product in Europe, and it wants to optimize site loading times for new European users. The site's backend must remain in the United States. The product is being launched in a few days, and an immediate solution is needed. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Use Amazon CloudFront with a custom origin pointing to the on-premises servers."
		],
		"wrongAnswersArray": [
			"Move the website to Amazon S3. Use Cross-Region Replication between Regions.",
			"Use an Amazon Route 53 geoproximity routing policy pointing to on-premises servers.",
			"Launch an Amazon EC2 instance in us-east-1 and migrate the site to it."
		]
	},
	{
		"question": "A company has created an image analysis application in which users can upload photos and add photo frames to their images. The users upload images and metadata to indicate which photo frames they want to add to their images. The application uses a single Amazon EC2 instance and Amazon DynamoDB to store the metadata. The application is becoming more popular, and the number of users is increasing. The company expects the number of concurrent users to vary significantly depending on the time of day and day of the week. The company must ensure that the application can scale to meet the needs of the growing user base. Which solution meats these requirements?",
		"correctAnswersArray": [
			"Use AWS Lambda to process the photos. Store the photos in Amazon S3. Retain DynamoDB to store the metadata."
		],
		"wrongAnswersArray": [
			"Use Amazon Kinesis Data Firehose to process the photos and to store the photos and metadata.",
			"Use AWS Lambda to process the photos. Store the photos and metadata in DynamoDB.",
			"Increase the number of EC2 instances to three. Use Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volumes to store the photos and metadata."
		]
	},
	{
		"question": "A medical records company is hosting an application on Amazon EC2 instances. The application processes customer data files that are stored on Amazon S3. The EC2 instances are hosted in public subnets. The EC2 instances access Amazon S3 over the internet, but they do not require any other network access. A new requirement mandates that the network traffic for file transfers take a private route and not be sent over the internet. Which change to the network architecture should a solutions architect recommend to meet this requirement?",
		"correctAnswersArray": [
			"Move the EC2 instances to private subnets. Create a VPC endpoint for Amazon S3, and link the endpoint to the route table for the private subnets."
		],
		"wrongAnswersArray": [
			"Create a NAT gateway. Configure the route table for the public subnets to send traffic to Amazon S3 through the NAT gateway.",
			"Configure the security group for the EC2 instances to restrict outbound traffic so that only traffic to the S3 pre+x list is permitted.",
			"Remove the internet gateway from the VPC. Set up an AWS Direct Connect connection, and route traffic to Amazon S3 over the Direct Connect connection."
		]
	},
	{
		"question": "A company needs to configure a real-time data ingestion architecture for its application. The company needs an API, a process that transforms data as the data is streamed, and a storage solution for the data. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Configure an Amazon API Gateway API to send data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3."
		],
		"wrongAnswersArray": [
			"Deploy an Amazon EC2 instance to host an API that sends data to AWS Glue. Stop source/destination checking on the EC2 instance. Use AWS Glue to transform the data and to send the data to Amazon S3.",
			"Configure an Amazon API Gateway API to send data to AWS Glue. Use AWS Lambda functions to transform the data. Use AWS Glue to send the data to Amazon S3.",
			"Deploy an Amazon EC2 instance to host an API that sends data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3."
		]
	},
	{
		"question": "A company has applications that run on Amazon EC2 instances in a VPC. One of the applications needs to call the Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the applications is allowed to travel across the internet. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Configure an S3 gateway endpoint."
		],
		"wrongAnswersArray": [
			"Configure a NAT gateway in the same subnet as the EC2 instances.",
			"Create an S3 bucket in a private subnet.",
			"Create an S3 bucket in the same AWS Region as the EC2 instances."
		]
	},
	{
		"question": "A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an application migration initiative. A solutions architect needs ta share an Amazon Machine Image (AMI) from an existing AWS account with the MSP Partner's AWS account.The AMI is backed by Amazon Elastic Block Store (Amazon EBS) and uses an AWS Key Management Service (AWS KMS) customer managed key to encrypt EBS volume snapshots. What is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?",
		"correctAnswersArray": [
			"Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to allow the MSP Partner's AWS account to use the key."
		],
		"wrongAnswersArray": [
			"Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's AWS account, Encrypt the S3 bucket with a new KMS key that is owned by the MSP Partner. Copy and launch the AMI in the MSP Partner's AWS account.",
			"Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to trust a new KMS key that is owned by the MSP Partner for encryption.",
			"Make the encrypted AMI and snapshots publicly available. Modify the key policy to allow the MSP Partner's AWS account to use the key."
		]
	},
	{
		"question": "A company has a highly dynamic batch processing job that uses many Amazon EC2 instances to complete it. The job is stateless in nature, can be started and stopped at any given time with no negative impact, and typically takes upwards of 60 minutes total to complete. The company has asked a solutions architect to design a scalable and cost-effective solution that meets the requirements of the job. What should the solutions architect recommend?",
		"correctAnswersArray": [
			"Implement EC2 Spot Instances."
		],
		"wrongAnswersArray": [
			"Implement EC2 On-Demand Instances.",
			"Implement the processing on AWS Lambda.",
			"Purchase EC2 Reserved Instances."
		]
	},
	{
		"question": "A company's containerized application runs on an Amazon EC2 instance. The application needs to download security certificates before it can communicate with other business applications. The company wants a highly secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in highly available storage after the data is encrypted. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes."
		],
		"wrongAnswersArray": [
			"Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access.",
			"Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon S3.",
			"Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket."
		]
	},
	{
		"question": "A solutions architect is designing a VPC with public and private subnets. The VPC and subnets use IPv4 CIDR blocks. There is one public subnet and one private subnet in each of three Availability Zones (AZs) for high availability. An internet gateway is used to provide internet access for the public subnets. The private subnets require access to the internet to allow Amazon EC2 instances to download software updates. What should the solutions architect do to enable Internet access for the private subnets?",
		"correctAnswersArray": [
			"Create three NAT gateways, one for each public subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ."
		],
		"wrongAnswersArray": [
			"Create three NAT instances, one for each private subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT instance in its AZ.",
			"Create a second internet gateway on one of the private subnets. Update the route table for the private subnets that forward non-VPC traffic to the private internet gateway.",
			"Create an egress-only internet gateway on one of the public subnets. Update the route table for the private subnets that forward non-VPC traffic to the egress-only Internet gateway."
		]
	},
	{
		"question": "A company has a production web application in which users upload documents through a web interface or a mobile app. According to a new regulatory requirement. New documents cannot be modified or deleted after they are stored. What should a solutions architect do to meet this requirement?",
		"correctAnswersArray": [
			"Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled."
		],
		"wrongAnswersArray": [
			"Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by mounting the volume in readonly mode.",
			"Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the documents periodically.",
			"Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to restrict all access to read-only."
		]
	},
	{
		"question": "A company is running an online transaction processing (OLTP) workload on AWS. This workload uses an unencrypted Amazon RDS DB instance in a Multi-AZ deployment. Daily database snapshots are taken from this instance. What should a solutions architect do to ensure the database and snapshots are always encrypted moving forward?",
		"correctAnswersArray": [
			"Encrypt a copy of the latest DB snapshot. Replace existing DB instance by restoring the encrypted snapshot."
		],
		"wrongAnswersArray": [
			"Create a new encrypted Amazon Elastic Block Store (Amazon EBS) volume and copy the snapshots to it. Enable encryption on the DB instance.",
			"Copy the snapshots and enable encryption using AWS Key Management Service (AWS KMS) Restore encrypted snapshot to an existing DB instance.",
			"Copy the snapshots to an Amazon S3 bucket that is encrypted using server-side encryption with AWS Key Management Service (AWS KMS) managed keys (SSE-KMS)."
		]
	},
	{
		"question": "A company recently launched Linux-based application instances on Amazon EC2 in a private subnet and launched a Linux-based bastion host on an Amazon EC2 instance in a public subnet of a VPC. A solutions architect needs to connect from the on-premises network, through the company's internet connection, to the bastion host, and to the application servers. The solutions architect must make sure that the security groups of all the EC2 instances will allow that access. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Replace the current security group of the bastion host with one that only allows inbound access from the external IP range for the company.",
			"Replace the current security group of the application instances with one that allows inbound SSH access from only the private IP address of the bastion host."
		],
		"wrongAnswersArray": [
			"Replace the current security group of the bastion host with one that only allows inbound access from the internal IP range for the company.",
			"Replace the current security group of the application instances with one that allows inbound SSH access from only the public IP address of the bastion host.",
			"Replace the current security group of the bastion host with one that only allows inbound access from the application instances."
		]
	},
	{
		"question": "A company's HTTP application is behind a Network Load Balancer (NLB). The NLB's target group is Configured to use an Amazon EC2 Auto Scaling group with multiple EC2 instances that run the web service. The company notices that the NLB is not detecting HTTP errors for the application. These errors require a manual restart of the EC2 instances that run the web service. The company needs to improve the application's availability without writing custom scripts or code. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances."
		],
		"wrongAnswersArray": [
			"Add a cron job to the EC2 instances to check the local application's logs once each minute. If HTTP errors are detected. the application will restart.",
			"Create an Amazon Cloud Watch alarm that monitors the UnhealthyHostCount metric for the NLB. Configure an Auto Scaling action to replace unhealthy instances when the alarm is in the ALARM state.",
			"Enable HTTP health checks on the NLB, supplying the URL of the company's application."
		]
	},
	{
		"question": "A company is designing an application where users upload small files into Amazon S3. After a user uploads a file, the file requires one-time simple processing to transform the data and save the data in JSON format for later analysis. Each file must be processed as quickly as possible after it is uploaded. Demand will vary. On some days, users will upload a high number of files. On other days, users will upload a few files or no files. Which solution meets these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB."
		],
		"wrongAnswersArray": [
			"Configure Amazon EventBridge (Amazon CloudWatch Events) to send an event to Amazon Kinesis Data Streams when a new file is uploaded. Use an AWS Lambda function to consume the event from the stream and process the data. Store the resulting JSON file in an Amazon Aurora DB cluster.",
			"Configure Amazon EMR to read text files from Amazon S3. Run processing scripts to transform the data. Store the resulting JSON file in an Amazon Aurora DB cluster.",
			"Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use Amazon EC2 instances to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB."
		]
	},
	{
		"question": "A company is planning to use an Amazon DynamoDB table for data storage. The company is concerned about cost optimization. The table will not be used on most mornings. In the evenings, the read and write traffic will often be unpredictable. When traffic spikes occur, they will happen very quickly. What should a solutions architect recommend?",
		"correctAnswersArray": [
			"Create a DynamoDB table in on-demand capacity mode."
		],
		"wrongAnswersArray": [
			"Create a DynamoDB table in provisioned capacity mode, and Configure it as a global table.",
			"Create a DynamoDB table with a global secondary index.",
			"Create a DynamoDB table with provisioned capacity and auto scaling."
		]
	},
	{
		"question": "A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data is not recorded for some of the event. A solutions architect needs to design a solution that stores customer data that is created during database upgrades. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database."
		],
		"wrongAnswersArray": [
			"Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy.",
			"Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database.",
			"Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database."
		]
	},
	{
		"question": "A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour. What should the solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time."
		],
		"wrongAnswersArray": [
			"Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.",
			"Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes.For RPO recovery, restore the DynamoDB table by using the EBS snapshot.",
			"Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB."
		]
	},
	{
		"question": "A survey company has gathered data for several years from areas in the United States. The company hosts the data in an Amazon S3 bucket that is 3 TB in size and growing. The company has started to share the data with a European marketing firm that has S3 buckets. The company wants to ensure that its data transfer costs remain as low as possible. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Configure the Requester Pays feature on the company's S3 bucket."
		],
		"wrongAnswersArray": [
			"Configure the company's S3 bucket to use S3 Intelligent-Tiering. Sync the S3 bucket to one of the marketing +rm's S3 buckets.",
			"Configure cross-account access for the marketing firm so that the marketing firm has access to the company's S3 bucket.",
			"Configure S3 Cross-Region Replication from the company's S3 bucket to one of the marketing firm's S3 buckets."
		]
	},
	{
		"question": "A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon EC2 in a private subnet. Security is a high priority for the company. How should security groups be configured in this situation? (Choose two.)",
		"correctAnswersArray": [
			"Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0."
		],
		"wrongAnswersArray": [
			"Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0.",
			"Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the security group for the web tier.",
			"Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the security group for the web tier.",
			"Configure the security group for the database tier to allow inbound traffic on port 1433 from the security group for the web tier."
		]
	},
	{
		"question": "A company is running a multi-tier web application on premises. The web application is containerized and runs on a number of Linux hosts connected to a PostgreSQL database that contains user records. The operational overhead of maintaining the infrastructure and capacity planning is limiting the company's growth. A solutions architect must improve the application's infrastructure. Which combination of actions should the solutions architect take to accomplish this? (Choose two.)",
		"correctAnswersArray": [
			"Migrate the web application to be hosted on AWS Fargate with Amazon Elastic Container Service (Amazon ECS)."
		],
		"wrongAnswersArray": [
			"Migrate the web application to be hosted on Amazon EC2 instances.",
			"Migrate the PostgreSQL database to Amazon Aurora.",
			"Set up an Amazon CloudFront distribution for the web application content.",
			"Set up Amazon ElastiCache between the web application and the PostgreSQL database."
		]
	},
	{
		"question": "A company hosts a containerized web application on a fleet of on-premises servers that process incoming requests. The number of requests is growing quickly. The on-premises servers cannot handle the increased number of requests. The company wants to move the application to AWS with minimum code changes and minimum development effort. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Use AWS Fargate on Amazon Elastic Container Service (Amazon ECS) to run the containerized web application with Service Auto Scaling. Use an Application Load Balancer to distribute the incoming requests."
		],
		"wrongAnswersArray": [
			"Use AWS Lambda with a new code that uses one of the supported languages. Create multiple Lambda functions to support the load. Use Amazon API Gateway as an entry point to the Lambda functions.",
			"Use a high performance computing (HPC) solution such as AWS ParallelCluster to establish an HPC cluster that can process the incoming requests at the appropriate scale.",
			"Use two Amazon EC2 instances to host the containerized web application. Use an Application Load Balancer to distribute the incoming requests."
		]
	},
	{
		"question": "A solutions architect needs to implement a solution to reduce a company's storage costs. All the company's data is in the Amazon S3 Standard storage class. The company must keep all data for at least 25 years. Data from the most recent 2 years must be highly available and immediately retrievable. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 years."
		],
		"wrongAnswersArray": [
			"Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately and to S3 Glacier Deep Archive after 2 years.",
			"Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in S3 Glacier Deep Archive.",
			"Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately."
		]
	},
	{
		"question": "A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least privilege to Configure permissions that will be used to run an AWS Lambda function. An Amazon EventBridge (Amazon CloudWatch Events) rule will invoke the function. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Add a resource-based policy to the function with lambda InvokeFunction as the action and Service events.amazonaws.com as the principal."
		],
		"wrongAnswersArray": [
			"Add an execution role to the function with lambda InvokeFunction as the action and * as the principal.",
			"Add a resource-based policy to the function with lambda * as the action and Service events.amazonaws.com as the principal.",
			"Add an execution role to the function with lambda InvokeFunction as the action and Service lambda.amazonaws.com as the principal."
		]
	},
	{
		"question": "A company wants to reduce the cost of its existing three-tier web architecture. The web, application, and database servers are running on Amazon EC2 instances for the development, test, and production environments. The EC2 instances average 30% CPU utilization during peak hours and 10% CPU utilization during non-peak hours. The production EC2 instances run 24 hours a day. The development and test EC2 instances run for at least 8 hours each day. The company plans to implement automation to stop the development and test EC2 instances when they are not in use.Which EC2 instance purchasing solution will meet the company's requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Use Reserved Instances for the production EC2 instances. Use On-Demand Instances for the development and test EC2 instances."
		],
		"wrongAnswersArray": [
			"Use On-Demand Instances for the production EC2 instances. Use Spot blocks for the development and test EC2 instances.",
			"Use Spot Instances for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.",
			"Use Spot blocks for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances."
		]
	},
	{
		"question": "A company is using a SQL database to store movie data that is publicly accessible. The database runs on an Amazon RDS Single-AZ DB instance. A script runs queries at random intervals each day to record the number of new movies that have been added to the database. The script must report a final total during business hours. The company's development team notices that the database performance is inadequate for development tasks when the script is running. A solutions architect must recommend a solution to resolve this issue. Which solution will meet this requirement with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Create a read replica of the database. Configure the script to query only the read replica."
		],
		"wrongAnswersArray": [
			"Use Amazon ElastiCache to cache the common queries that the script runs against the database.",
			"Modify the DB instance to be a Multi-AZ deployment.",
			"Instruct the development team to manually export the entries in the database at the end of each day."
		]
	},
	{
		"question": "A media company is evaluating the possibility of moving its systems to the AWS Cloud. The company needs at least 10 TB of storage with the maximum possible I/O performance for video processing, 300 TB of very durable storage for storing media content, and 900 TB of storage to meet requirements for archival media that is not in use anymore. Which set of services should a solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage"
		],
		"wrongAnswersArray": [
			"Amazon EBS for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage",
			"Amazon EC2 instance store for maximum performance, Amazon EFS for durable data storage, and Amazon S3 for archival storage",
			"Amazon EBS for maximum performance, Amazon EFS for durable data storage, and Amazon S3 Glacier for archival storage"
		]
	},
	{
		"question": "A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages. What should a solutions architect do to ensure messages are being processed once only?",
		"correctAnswersArray": [
			"Use the ChangeMessageVisibility API call to increase the visibility timeout."
		],
		"wrongAnswersArray": [
			"Use the ReceiveMessage API call to set an appropriate wait time.",
			"Use the CreateQueue API call to create a new queue.",
			"Use the AddPermission API call to add appropriate permissions."
		]
	},
	{
		"question": "A company recently migrated a message processing system to AWS. The system receives messages into an ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database running on Amazon EC2. The company wants this application to be highly available with low operational complexity. Which architecture offers the HIGHEST availability?",
		"correctAnswersArray": [
			"Use Amazon MQ with active/standby brokers Configured across two Availability Zones. Add an Auto Scaling group for the consumer EC2 instances across two Availability Zones. Use Amazon RDS for MySQL with Multi-AZ enabled."
		],
		"wrongAnswersArray": [
			"Add a second ActiveMQ server to another Availability Zone. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.",
			"Use Amazon MQ with active/standby brokers Configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Use Amazon RDS for MySQL with Multi-AZ enabled.",
			"Use Amazon MQ with active/standby brokers Configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone."
		]
	},
	{
		"question": "A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various storage options. The storage solution must be highly available and integrated with Active Directory for access control. Which solution will satisfy these requirements?",
		"correctAnswersArray": [
			"Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for authentication."
		],
		"wrongAnswersArray": [
			"Create an Amazon S3 bucket and Configure Microsoft Windows Server to mount it as a volume.",
			"Configure Amazon EFS storage and set the Active Directory domain for authentication.",
			"Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones."
		]
	},
	{
		"question": "A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers are worried about accidental deletion of documents in the S3 bucket and want a more secure solution. What should a solutions architect do to secure the audit documents?",
		"correctAnswersArray": [
			"Enable the versioning and MFA Delete features on the S3 bucket."
		],
		"wrongAnswersArray": [
			"Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user accounts from accessing the KMS key.",
			"Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account.",
			"Add an S3 Lifecycle policy to the audit team's IAM user accounts to deny the s3 DeleteObject action during audit dates."
		]
	},
	{
		"question": "A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The process should run in parallel while adding and removing application nodes as needed based on the number of jobs to be processed. The processor application is stateless.The solutions architect must ensure that the application is loosely coupled and the job items are durably stored.Which design should the solutions architect use?",
		"correctAnswersArray": [
			"Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of items in the SQS queue."
		],
		"wrongAnswersArray": [
			"Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch con+guration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage.",
			"Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage.",
			"Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic."
		]
	},
	{
		"question": "A bicycle sharing company is developing a multi-tier architecture to track the location of its bicycles during peak operating hours. The company wants to use these data points in its existing analytics platform. A solutions architect must determine the most viable multi-tier option to support this architecture. The data points must be accessible from the REST API. Which action meets these requirements for storing and retrieving location data?",
		"correctAnswersArray": [
			"Use Amazon API Gateway with AWS Lambda."
		],
		"wrongAnswersArray": [
			"Use Amazon API Gateway with Amazon Kinesis Data Analytics.",
			"Use Amazon QuickSight with Amazon Redshift.",
			"Use Amazon Athena with Amazon S3."
		]
	},
	{
		"question": "A company uses a popular content management system (CMS) for its corporate website. However, the required patching and maintenance are burdensome. The company is redesigning its website and wants a new solution. The website will be updated four times a year and does not need to have any dynamic content available. The solution must provide high scalability and enhanced security. Which combination of changes will meet these requirements with the LEAST operational overhead? (Choose two.)",
		"correctAnswersArray": ["Create the new website and an Amazon S3 bucket. Deploy the website on the S3 bucket with static website hosting enabled.", "Configure Amazon CloudFront in front of the website to use HTTPS functionality."],
		"wrongAnswersArray": [

			"Deploy an AWS WAF web ACL in front of the website to provide HTTPS functionality.",
			"Create and deploy an AWS Lambda function to manage and serve the website content.",
			"Create the new website. Deploy the website by using an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer.",

		]
	},
	{
		"question": "A company has an automobile sales website that stores its listings in a database on Amazon RDS. When an automobile is sold, the listing needs to be removed from the website and the data must be sent to multiple target systems. Which design should a solutions architect recommend?",
		"correctAnswersArray": [
			"Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets."
		],
		"wrongAnswersArray": [
			"Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) queue for the targets to consume.",
			"Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) FIFO queue for the targets to consume.",
			"Subscribe to an RDS event notification and send an Amazon Simple Queue Service (Amazon SQS) queue fanned out to multiple Amazon Simple Noti+cation Service (Amazon SNS) topics. Use AWS Lambda functions to update the targets."
		]
	},
	{
		"question": "A company runs an on-premises application that is powered by a MySQL database. The company is migrating the application to AWS to increase the application's elasticity and availability. The current architecture shows heavy read activity on the database during times of normal operation. Every 4 hours, the company's development team pulls a full export of the production database to populate a database in the staging environment. During this period, users experience unacceptable application latency. The development team is unable to use the staging environment until the procedure completes. A solutions architect must recommend replacement architecture that alleviates the application latency issue. The replacement architecture also must give the development team the ability to continue using the staging environment without delay. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Use database cloning to create the staging database on-demand."
		],
		"wrongAnswersArray": [
			"Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Use the standby instance for the staging database.",
			"Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.",
			"Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility."
		]
	},
	{
		"question": "A company wants to build a scalable key management infrastructure to support developers who need to encrypt data in their applications. What should a solutions architect do to reduce the operational burden?",
		"correctAnswersArray": [
			"Use AWS Key Management Service (AWS KMS) to protect the encryption keys."
		],
		"wrongAnswersArray": [
			"Use AWS certificate Manager (ACM) to create, store, and assign the encryption keys.",
			"Use an IAM policy to limit the scope of users who have access permissions to protect the encryption keys.",
			"Use multi-factor authentication (MFA) to protect the encryption keys."
		]
	},
	{
		"question": "A company needs to keep user transaction data in an Amazon DynamoDB table. The company must retain the data for 7 years. What is the MOST operationally efficient solution that meets these requirements?",
		"correctAnswersArray": [
			"Use AWS Backup to create backup schedules and retention policies for the table."
		],
		"wrongAnswersArray": [
			"Use DynamoDB point-in-time recovery to back up the table continuously.",
			"Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function. Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket.Set an S3 Lifecycle con+guration for the S3 bucket.",
			"Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket."
		]
	},
	{
		"question": "A company wants to migrate an on-premises data center to AWS. The data center hosts an SFTP server that stores its data on an NFS-based file system. The server holds 200 GB of data that needs to be transferred. The server must be hosted on an Amazon EC2 instance that uses an Amazon Elastic File System (Amazon EFS) file system. Which combination of steps should a solutions architect take to automate this task? (Choose two.)",
		"correctAnswersArray": [
			"Install an AWS DataSync agent in the on-premises data center."
		],
		"wrongAnswersArray": [
			"Manually use an operating system copy command to push the data to the EC2 instance.",
			"Use AWS DataSync to create a suitable location configuration for the on-premises SFTP server.",
			"Launch the EC2 instance into the same Availability Zone as the EFS file system.",
			"Create a secondary Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instance for the data."
		]
	},
	{
		"question": "A company needs to store data in Amazon S3 and must prevent the data from being changed. The company wants new objects that are uploaded to Amazon S3 to remain unchangeable for a nonspecific amount of time until the company decides to modify the objects. Only specific users in the company's AWS account can have the ability to delete the objects. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Set a retention period of 100 years. Use governance mode as the S3 bucket’s default retention mode for new objects."
		],
		"wrongAnswersArray": [
			"Create an S3 bucket. Use AWS CloudTrail to track any S3 API events that modify the objects. Upon noti+cation, restore the modified objects from any backup versions that the company has.",
			"Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Add a legal hold to the objects. Add the s3 PutObjectLegalHold permission to the IAM policies of users who need to delete the objects.",
			"Create an S3 Glacier vault. Apply a write-once, read-many (WORM) vault lock policy to the objects."
		]
	},
	{
		"question": "A company uses 50 TB of data for reporting. The company wants to move this data from on premises to AWS. A custom application in the company’s data center runs a weekly data transformation job. The company plans to pause the application until the data transfer is complete and needs to begin the transfer process as soon as possible. The data center does not have any available network bandwidth for additional workloads. A solutions architect must transfer the data and must Configure the transformation job to continue to run in the AWS Cloud. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue."
		],
		"wrongAnswersArray": [
			"Order an AWS Snowcone device to move the data. Deploy the transformation application to the device.",
			"Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application.",
			"Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue."
		]
	},
	{
		"question": "A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC. The company had an inspection server in its on-premises data center. The inspection server performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the same functionalities in the AWS Cloud. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC."
		],
		"wrongAnswersArray": [
			"Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering",
			"Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC",
			"Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the production VPC."
		]
	},
	{
		"question": "A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis. The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days. What is the MOST operationally efficient solution that meets these requirements?",
		"correctAnswersArray": [
			"Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days."
		],
		"wrongAnswersArray": [
			"Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.",
			"Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, and set the message retention period to 14 days. Configure consumers to poll the SQS queue, check the age of the message, and analyze the message data as needed. If the message is 14 days old, the consumer should copy the message to an Amazon S3 bucket and delete the message from the SQS queue.",
			"Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. Set up the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster to take manual snapshots every day and delete data from the cluster that is older than 14 days."
		]
	},
	{
		"question": "A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user names and passwords that are stored locally in a file. The company wants to minimize the operational overhead of credential management. What should a solutions architect do to accomplish this goal?",
		"correctAnswersArray": [
			"Use AWS Secrets Manager. Turn on automatic rotation."
		],
		"wrongAnswersArray": [
			"Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume for each EC2 instance. Attach the new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application to the new EBS volume.",
			"Create an Amazon S3 bucket to store objects that are encrypted with an AWS Key Management Service (AWS KMS) encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket.",
			"Use AWS Systems Manager Parameter Store. Turn on automatic rotation"
		]
	},
	{
		"question": "A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week. What should the company do to guarantee the EC2 capacity?",
		"correctAnswersArray": [
			"Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed."
		],
		"wrongAnswersArray": [
			"Create an On-Demand Capacity Reservation that specifies the Region needed.",
			"Purchase Reserved Instances that specify the Region needed.",
			"Purchase Reserved Instances that specify the Region and three Availability Zones needed."
		]
	},
	{
		"question": "A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users who access the website. Which solution meets these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the CloudFront distribution."
		],
		"wrongAnswersArray": [
			"Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing entries.",
			"Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket. Edit the Route 53 entries to point to the IP addresses of the accelerators.",
			"Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint."
		]
	},
	{
		"question": "A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SOS) subscriptions. Configure the consumer applications to process the messages from the queues."
		],
		"wrongAnswersArray": [
			"Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from DynamoDB to process the messages.",
			"Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages.",
			"Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics."
		]
	},
	{
		"question": "A company runs its infrastructure on AWS and has a registered base of 700,000 users for its document management application. The company intends to create a product that converts large .pdf files to .jpg image files. The .pdf files average 5 MB in size. The company needs to store the original files and the converted files. A solutions architect must design a scalable solution to accommodate demand that will grow rapidly over time. Which solution meets these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Save the .pdf files to Amazon S3. Configure an S3 PUT event to invoke an AWS Lambda function to convert the files to .jpg format and store them back in Amazon S3."
		],
		"wrongAnswersArray": [
			"Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the file to .jpg format. Save the .pdf files and the .jpg files in the EBS store.",
			"Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic Block Store (Amazon EBS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the files to .jpg format. Save the .pdf files and the .jpg files in the EBS store.",
			"Save the .pdf files to Amazon DynamoDB. Use the DynamoDB Streams feature to invoke an AWS Lambda function to convert the files to .jpg format and store them back in DynamoDB."
		]
	},
	{
		"question": "A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint.",
			"\"Endpoint-URL\" and Value",
			"\"Company Domain Name\" to overwrite the default URL. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM)."
		],
		"wrongAnswersArray": [
			"Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name.",
			"Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region.",
			"Create stage variables in API Gateway with Name"
		]
	},
	{
		"question": "A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets. A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance."
		],
		"wrongAnswersArray": [
			"Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.",
			"Deploy a transit gateway in the inspection VPC. Configure route tables to route the incoming packets through the transit gateway.",
			"Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection."
		]
	},
	{
		"question": "A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager."
		],
		"wrongAnswersArray": [
			"Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard.",
			"Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.",
			"Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager."
		]
	},
	{
		"question": "A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1 year and then must be archived for an additional 9 years. No one at the company, including administrative users and root users, can be able to delete the records during the entire 10-year period. The records must be stored with maximum resiliency. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year. Use S3 Object Lock in compliance mode for a period of 10 years."
		],
		"wrongAnswersArray": [
			"Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10 years, change the IAM policy to allow deletion.",
			"Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of the records for a period of 10 years.",
			"Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years."
		]
	},
	{
		"question": "A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can access the S3 bucket. What should the solutions architect do to meet this requirement?",
		"correctAnswersArray": [
			"Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances"
		],
		"wrongAnswersArray": [
			"Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances.",
			"Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances",
			"Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances."
		]
	},
	{
		"question": "A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Enable AWS Shield Advanced and assign the ELB to it."
		],
		"wrongAnswersArray": [
			"Enable Amazon GuardDuty on the account.",
			"Enable Amazon Inspector on the EC2 instances.",
			"Enable AWS Shield and assign Amazon Route 53 to it."
		]
	},
	{
		"question": "An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB."
		],
		"wrongAnswersArray": [
			"Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.",
			"Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.",
			"Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website trajc. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL."
		]
	},
	{
		"question": "A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution."
		],
		"wrongAnswersArray": [
			"Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application",
			"Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application.",
			"Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint Configure Route 53 to route traffic to the CloudFront distribution."
		]
	},
	{
		"question": "A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text."
		],
		"wrongAnswersArray": [
			"Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text.",
			"Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text.",
			"Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text."
		]
	},
	{
		"question": "A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval. What should a solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream."
		],
		"wrongAnswersArray": [
			"Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.",
			"Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3.",
			"Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications."
		]
	},
	{
		"question": "A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection. The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket"
		],
		"wrongAnswersArray": [
			"Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.",
			"Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.",
			"Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket."
		]
	},
	{
		"question": "A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS databases. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create a security group that allows inbound traffic from the security group that is assigned to instances in the private subnets. Attach the security group to the DB instances."
		],
		"wrongAnswersArray": [
			"Create a security group that denies inbound traffic from the security group that is assigned to instances in the public subnets. Attach the security group to the DB instances.",
			"Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets.",
			"Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route table with the database subnets."
		]
	},
	{
		"question": "A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture. What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?",
		"correctAnswersArray": [
			"Use Amazon Athena directly with Amazon S3 to run the queries as needed."
		],
		"wrongAnswersArray": [
			"Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.",
			"Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed.",
			"Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console."
		]
	},
	{
		"question": "A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call, but users access the files infrequently after 1 year. The company wants to optimize its solution by giving users the ability to query and retrieve files that are less than 1-year-old as quickly as possible. A delay in retrieving older files is acceptable. Which solution will meet these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Store individual files in Amazon S3 Intelligent-Tiering. Use S3 Lifecycle policies to move the files to S3 Glacier Flexible Retrieval after 1 year. Query and retrieve the files that are in Amazon S3 by using Amazon Athena. Query and retrieve the files that are in S3 Glacier by using S3 Glacier Select."
		],
		"wrongAnswersArray": [
			"Store individual files with tags in Amazon S3 Standard storage. Store search metadata for each archive in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Instant Retrieval after 1 year. Query and retrieve the files by searching for metadata from Amazon S3.",
			"Store individual files with tags in Amazon S3 Glacier Instant Retrieval. Query the tags to retrieve the files from S3 Glacier Instant Retrieval.",
			"Store individual files in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Deep Archive after 1 year. Store search metadata in Amazon RDS. Query the files from Amazon RDS. Retrieve the files from S3 Glacier Deep Archive."
		]
	},
	{
		"question": "A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure that the catalog is highly available and that the catalog is stored in a durable location. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Move the catalog to an Amazon Elastic File System (Amazon EFS) file system."
		],
		"wrongAnswersArray": [
			"Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.",
			"Move the catalog to Amazon ElastiCache for Redis.",
			"Deploy a larger EC2 instance with a larger instance store."
		]
	},
	{
		"question": "A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance. Which solution meets these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required."
		],
		"wrongAnswersArray": [
			"Stop the DB instance when tests are completed. Restart the DB instance when required.",
			"Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.",
			"Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required."
		]
	},
	{
		"question": "A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling. How should the solutions architect generate the information with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types"
		],
		"wrongAnswersArray": [
			"Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months",
			"Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types.",
			"Use AWS Budgets to create a budget report and compare EC2 costs based on instance types."
		]
	},
	{
		"question": "A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance. The database's performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas."
		],
		"wrongAnswersArray": [
			"Use Amazon Redshift with a single node for leader and compute functionality",
			"Use Amazon RDS with a Single-AZ deployment Configure Amazon RDS to add reader instances in a different Availability Zone.",
			"Use Amazon ElastiCache for Memcached with EC2 Spot Instances."
		]
	},
	{
		"question": "A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time. What should a solutions architect propose to ensure users see all of their documents at once?",
		"correctAnswersArray": [
			"Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS"
		],
		"wrongAnswersArray": [
			"Copy the data so both EBS volumes contain all the documents",
			"Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server",
			"Configure the Application Load Balancer to direct a user to the server with the documents"
		]
	},
	{
		"question": "A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed. The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days."
		],
		"wrongAnswersArray": [
			"Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS",
			"Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days.",
			"Create an Amazon FSx for Windows File Server file system to extend the company's storage space"
		]
	},
	{
		"question": "A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day. What should a solutions architect do to transmit and process the clickstream data?",
		"correctAnswersArray": [
			"Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis."
		],
		"wrongAnswersArray": [
			"Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis.",
			"Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics.",
			"Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket. run an AWS Lambda function to process the data for analysis."
		]
	},
	{
		"question": "An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket. A solutions architect needs to design a solution that uses durable, stateless components to process the images automatically. Which combination of actions will meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket.",
			"Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue."
		],
		"wrongAnswersArray": [
			"Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon ample Notification Service (Amazon SNS) topic with the application owner's email address for further processing.",
			"Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function.",
			"Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed."
		]
	},
	{
		"question": "A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD storage. There are millions of updates against this data every day through the company's website. The company has noticed that some insert operations are taking 10 seconds or longer. The company has determined that the database storage performance is the problem. Which solution addresses this performance issue?",
		"correctAnswersArray": [
			"Change the storage type to Provisioned IOPS SSD."
		],
		"wrongAnswersArray": [
			"Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication.",
			"Change the DB instance to a memory optimized instance class.",
			"Change the DB instance to a burstable performance instance class."
		]
	},
	{
		"question": "A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email."
		],
		"wrongAnswersArray": [
			"Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data.",
			"Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email.",
			"Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data.",
			"Configure the application to send the data to Amazon Kinesis Data Firehose."
		]
	},
	{
		"question": "A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon EC2 instances on Amazon Elastic Block Store (Amazon EBS) volumes. Modifications to the cloned data must not affect the production environment. The software that accesses this data requires consistently high I/O performance. A solutions architect needs to minimize the time that is required to clone the production data into the test environment. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment."
		],
		"wrongAnswersArray": [
			"Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS snapshots.",
			"Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment.",
			"Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes in the test environment."
		]
	},
	{
		"question": "A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely. Which storage solution will meet these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month"
		],
		"wrongAnswersArray": [
			"Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.",
			"Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month.",
			"Configure S3 Intelligent-Tiering to automatically migrate objects."
		]
	},
	{
		"question": "A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule."
		],
		"wrongAnswersArray": [
			"Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule.",
			"Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials.",
			"Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB. Use the RDS API to rotate the secrets."
		]
	},
	{
		"question": "A company wants to migrate its on-premises application to AWS. The application produces output files that vary in size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system structure. The company wants a solution that scales automatically. is highly available, and requires minimum operational overhead. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) for storage."
		],
		"wrongAnswersArray": [
			"Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic Block Store (Amazon EBS) for storage.",
			"Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Block Store (Amazon EBS) for storage.",
			"Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon S3 for storage."
		]
	},
	{
		"question": "A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption."
		],
		"wrongAnswersArray": [
			"Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets.",
			"Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.",
			"Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets."
		]
	},
	{
		"question": "A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size. Recently, the company discovered that some of the stores have uploaded files that contain personally identifiable information (PII) that should not have been included. The company wants administrators to be alerted if PII is shared again. The company also wants to automate remediation. What should a solutions architect do to meet these requirements with the LEAST development effort?",
		"correctAnswersArray": [
			"Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII."
		],
		"wrongAnswersArray": [
			"Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a notification to the administrators and trigger an S3 Lifecycle policy to remove the meats that contain PII.",
			"Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.",
			"Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII."
		]
	},
	{
		"question": "A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually."
		],
		"wrongAnswersArray": [
			"Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.",
			"Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.",
			"Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate."
		]
	},
	{
		"question": "A company has a data ingestion workflow that consists of the following • An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries • An AWS Lambda function to process the data and record metadata The company observes that the ingestion workflow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job. Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)",
		"correctAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.",
			"Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue."
		],
		"wrongAnswersArray": [
			"Increase the CPU and memory that are allocated to the Lambda function.",
			"Deploy the Lambda function in multiple Availability Zones.",
			"Increase provisioned throughput for the Lambda function."
		]
	},
	{
		"question": "A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC. The EC2 instances run inside several subnets across multiple Availability Zones. The EC2 instances do not communicate with each other. However, the EC2 instances download images from Amazon S3 and upload images to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges. What is the MOST cost-effective way for the company to avoid Regional data transfer charges?",
		"correctAnswersArray": [
			"Deploy a gateway VPC endpoint for Amazon S3."
		],
		"wrongAnswersArray": [
			"Provision an EC2 Dedicated Host to run the EC2 instances.",
			"Launch the NAT gateway in each Availability Zone.",
			"Replace the NAT gateway with a NAT instance"
		]
	},
	{
		"question": "A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS. What should a solutions architect do to meet this requirement?",
		"correctAnswersArray": [
			"Create a listener rule on the ALB to redirect HTTP traffic to HTTPS."
		],
		"wrongAnswersArray": [
			"Create a rule that replaces the HTTP in the URL with HTTPS.",
			"Update the ALB's network ACL to accept only HTTPS traffic.",
			"Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI)."
		]
	},
	{
		"question": "A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database. During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue."
		],
		"wrongAnswersArray": [
			"Change the platform from Aurora to Amazon DynamoDProvision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.",
			"Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS).",
			"Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers."
		]
	},
	{
		"question": "A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances."
		],
		"wrongAnswersArray": [
			"Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.",
			"Create an AWS Lambda function to apply the patch to all EC2 instances.",
			"Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances."
		]
	},
	{
		"question": "A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions. The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region."
		],
		"wrongAnswersArray": [
			"Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB. Create an Amazon CloudFront distribution that uses the latency record as an origin.",
			"Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region.",
			"Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB. Deploy an Amazon CloudFront distribution that uses the weighted record as an origin."
		]
	},
	{
		"question": "A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session."
		],
		"wrongAnswersArray": [
			"Use the EC2 serial console to directly access the terminal interface of each instance for administration.",
			"Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel.",
			"Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance."
		]
	},
	{
		"question": "A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations. Which solution meets these requirements with the LEAST amount of operational overhead?",
		"correctAnswersArray": [
			"Add the aws PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy."
		],
		"wrongAnswersArray": [
			"Create an organizational unit (OU) for each department. Add the aws PrincipalOrgPaths global condition key to the S3 bucket policy.",
			"Tag each user that needs access to the S3 bucket. Add the aws PrincipalTag global condition key to the S3 bucket policy.",
			"Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly."
		]
	},
	{
		"question": "A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The company runs Amazon EC2 instances to receive the data and to upload the data to an Amazon S3 bucket for analysis. The same EC2 instance that receives and uploads the data also sends a notification to the user when an upload is complete. The company has noticed slow application performance and wants to improve the performance as much as possible. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete."
		],
		"wrongAnswersArray": [
			"Create an Amazon EventBridge (Amazon CloudWatch Events) rule for each SaaS source to send output data. Configure the S3 bucket as the rule's target. Create a second EventBridge (Cloud Watch Events) rule to send events when the upload to the S3 bucket is complete. Configure an Amazon Simple Notification Service (Amazon SNS) topic as the second rule's target.",
			"Create an Auto Scaling group so that EC2 instances can scale out. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.",
			"Create a Docker container to use instead of an EC2 instance. Host the containerized application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon CloudWatch Container Insights to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete."
		]
	},
	{
		"question": "A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images. Which method is the MOST cost-effective for hosting the website?",
		"correctAnswersArray": [
			"Create an Amazon S3 bucket and host the website there."
		],
		"wrongAnswersArray": [
			"Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework.",
			"Deploy a web server on an Amazon EC2 instance to host the website.",
			"Containerize the website and host it in AWS Fargate."
		]
	},
	{
		"question": "A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB instances. and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check. What should a solutions architect do to accomplish this?",
		"correctAnswersArray": [
			"Use AWS Config rules to define and detect resources that are not properly tagged."
		],
		"wrongAnswersArray": [
			"Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.",
			"Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.",
			"Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually."
		]
	},
	{
		"question": "A company is developing a two-tier web application on AWS. The company's developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company must not hardcode database credentials in the application. The company must also implement a solution to automatically rotate the database credentials on a regular basis. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret."
		],
		"wrongAnswersArray": [
			"Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant access to the encrypted parameters.",
			"Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance metadata at the same time.",
			"Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the ability to fall back to previous values."
		]
	},
	{
		"question": "A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3."
		],
		"wrongAnswersArray": [
			"Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.",
			"Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway",
			"Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway."
		]
	},
	{
		"question": "A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups"
		],
		"wrongAnswersArray": [
			"Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.",
			"Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.",
			"Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports."
		]
	},
	{
		"question": "A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server."
		],
		"wrongAnswersArray": [
			"Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances.",
			"Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.",
			"Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS."
		]
	},
	{
		"question": "A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications interact with the data each day. The company is moving its Windows workloads to AWS. As the company continues this process, the company requires access to AWS and on-premises file storage with minimum latency. The company needs a solution that minimizes operational overhead and requires no significant changes to the existing file access patterns. The company uses an AWS Site-to-Site VPN connection for connectivity to AWS. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx File Gateway."
		],
		"wrongAnswersArray": [
			"Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS.",
			"Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway. depending on each workload's location.",
			"Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File Gateway. Reconfigure the on-premises workloads and the cloud workloads to use the S3 File Gateway."
		]
	},
	{
		"question": "An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet. Which solution will provide private network connectivity to Amazon S3?",
		"correctAnswersArray": [
			"Create a gateway VPC endpoint to the S3 bucket."
		],
		"wrongAnswersArray": [
			"Create an instance profile on Amazon EC2 to allow S3 access",
			"Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.",
			"Create an Amazon API Gateway API with a private link to access the S3 endpoint."
		]
	},
	{
		"question": "A company has an on-premises application that generates a large amount of time-sensitive data that is backed up to Amazon S3. The application has grown and there are user complaints about internet bandwidth limitations. A solutions architect needs to design a long-term solution that allows for both timely backups to Amazon S3 and with minimal impact on internet connectivity for internal users. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Establish a new AWS Direct Connect connection and direct backup traffic through this new connection."
		],
		"wrongAnswersArray": [
			"Submit a support ticket through the AWS Management Console. Request the removal of S3 service limits from the account.",
			"Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.",
			"Order daily AWS Snowball devices. Load the data onto the Snowball devices and return the devices to AWS each day."
		]
	},
	{
		"question": "A company wants to run its critical applications in containers to meet requirements for scalability and availability. The company prefers to focus on maintenance of the critical applications. The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate."
		],
		"wrongAnswersArray": [
			"Use Amazon EC2 instances, and install Docker on the instances.",
			"Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI).",
			"Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes."
		]
	},
	{
		"question": "A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing."
		],
		"wrongAnswersArray": [
			"Use an API Gateway authorizer to block any requests while the application processes an order.",
			"Use an API Gateway integration to publish a message to an Amazon Simple Noti+cation Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.",
			"Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing."
		]
	},
	{
		"question": "A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files. Which storage option meets these requirements?",
		"correctAnswersArray": [
			"S3 Intelligent-Tiering"
		],
		"wrongAnswersArray": [
			"S3 Standard-Infrequent Access (S3 Standard-IA)",
			"S3 Standard",
			"S3 One Zone-Infrequent Access (S3 One Zone-IA)"
		]
	},
	{
		"question": "A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes. What should a solutions architect do to accomplish this goal?",
		"correctAnswersArray": [
			"Turn on AWS Config with the appropriate rules."
		],
		"wrongAnswersArray": [
			"Turn on Amazon Inspector with the appropriate assessment template.",
			"Turn on AWS Trusted Advisor with the appropriate checks.",
			"Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon Cloud Watch Events)."
		]
	},
	{
		"question": "A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory."
		],
		"wrongAnswersArray": [
			"Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console.",
			"Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.",
			"Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory."
		]
	},
	{
		"question": "A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability. How should a solutions architect design the architecture to meet these requirements?",
		"correctAnswersArray": [
			"Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue."
		],
		"wrongAnswersArray": [
			"Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes.",
			"Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server. D. I",
			"Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling"
		]
	},
	{
		"question": "A company is running a popular social media website. The website gives users the ability to upload images to share with other users. The company wants to make sure that the images do not contain inappropriate content. The company needs a solution that minimizes development effort. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions."
		],
		"wrongAnswersArray": [
			"Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence predictions.",
			"Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground truth to label low-confidence predictions.",
			"Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions."
		]
	},
	{
		"question": "A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Enable versioning on the S3 bucket."
		],
		"wrongAnswersArray": [
			"Enable default encryption on the S3 bucket.",
			"Enable MFA Delete on the S3 bucket.",
			"Create a bucket policy on the S3 bucket.",
			"Create a lifecycle policy for the objects in the S3 bucket."
		]
	},
	{
		"question": "A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Use AWS Config to track configuration changes and AWS CloudTrail to record API calls."
		],
		"wrongAnswersArray": [
			"Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.",
			"Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.",
			"Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls."
		]
	},
	{
		"question": "A company has two applications a sender application that sends messages with payloads to be processed and a processing application intended to receive the messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages. Which solution meets these requirements and is the MOST operationally efficient?",
		"correctAnswersArray": [
			"Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue. Configure a dead-letter queue to collect the messages that failed to process."
		],
		"wrongAnswersArray": [
			"Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).",
			"Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic.",
			"Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively."
		]
	},
	{
		"question": "19) A company recently started using Amazon Aurora as the data store for its global ecommerce application. When large reports are run, developers report that the ecommerce application is performing poorly. After reviewing metrics in Amazon CloudWatch, a solutions architect finds that the ReadIOPS and CPUUtilizalion metrics are spiking when monthly reports run. What is the MOST cost-effective solution?",
		"correctAnswersArray": [
			"Migrate the monthly reporting to an Aurora Replica."
		],
		"wrongAnswersArray": [
			"Increase the Provisioned IOPS on the Aurora instance. Increase the Provisioned IOPS on the Aurora instance.",
			"Migrate the Aurora database to a larger instance class.",
			"Migrate the monthly reporting to Amazon Redshift."
		]
	},
	{
		"question": "A company runs a web-based portal that provides users with global breaking news, local alerts, and weather updates. The portal delivers each user a personalized view by using mixture of static and dynamic content. Content is served over HTTPS through an API server running on an Amazon EC2 instance behind an Application Load Balancer (ALB). The company wants the portal to provide this content to its users across the world as quickly as possible. How should a solutions architect design the application to ensure the LEAST amount of latency for all users?",
		"correctAnswersArray": [
			"Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve all static and dynamic content by specifying the ALB as an origin."
		],
		"wrongAnswersArray": [
			"Deploy the application stack in two AWS Regions. Use an Amazon Route 53 geolocation routing policy to serve all content from the ALB in the closest Region.",
			"Deploy the application stack in two AWS Regions. Use an Amazon Route 53 latency routing policy to serve all content from the ALB in the closest Region.",
			"Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve the static content. Serve the dynamic content directly from the ALB."
		]
	},
	{
		"question": "A company wants to migrate its existing on-premises monolithic application to AWS. The company wants to keep as much of the front-end code and the backend code as possible. However, the company wants to break the application into smaller applications. A different team will manage each application. The company needs a highly scalable solution that minimizes operational overhead. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Host the application on Amazon Elastic Container Service (Amazon ECS). Set up an Application Load Balancer with Amazon ECS as the target."
		],
		"wrongAnswersArray": [
			"Host the application on AWS Lambda. Integrate the application with Amazon API Gateway.",
			"Host the application with AWS Amplify. Connect the application to an Amazon API Gateway API that is integrated with AWS Lambda.",
			"Host the application on Amazon EC2 instances. Set up an Application Load Balancer with EC2 instances in an Auto Scaling group as targets."
		]
	},
	{
		"question": "A company’s web application is running on Amazon EC2 instances behind an Application Load Balancer. The company recently changed its policy, which now requires the application to be accessed from one specific country only. Which configuration will meet this requirement?",
		"correctAnswersArray": [
			"Configure AWS WAF on the Application Load Balancer in a VPC."
		],
		"wrongAnswersArray": [
			"Configure the network ACL for the subnet that contains the EC2 instances.",
			"Configure the security group on the Application Load Balancer.",
			"Configure the security group for the EC2 instances."
		]
	},
	{
		"question": "A company is building a containerized application on premises and decides to move the application to AWS. The application will have thousands of users soon after it is deployed. The company is unsure how to manage the deployment of containers at scale. The company needs to deploy the containerized application in a highly available architecture that minimizes operational overhead. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use target tracking to scale automatically based on demand."
		],
		"wrongAnswersArray": [
			"Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use target tracking to scale automatically based on demand.",
			"Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to scale out EC2 instances when the average CPU utilization threshold is breached.",
			"Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2 instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon CloudWatch. Launch new EC2 instances as needed."
		]
	},
	{
		"question": "A company needs to save the results from a medical trial to an Amazon S3 repository. The repository must allow a few scientists to add new files and must restrict all other users to read-only access. No users can have the ability to modify or delete any files in the repository. The company must keep every file in the repository for a minimum of 1 year after its creation date. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use S3 Object Lock in compliance mode with a retention period of 365 days."
		],
		"wrongAnswersArray": [
			"Use S3 Object Lock in governance mode with a legal hold of 1 year.",
			"Use an IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket policy to only allow the IAM role.",
			"Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the function to track the hash of the saved object so that modified objects can be marked accordingly."
		]
	},
	{
		"question": "A company sells ringtones created from clips of popular songs. The files containing the ringtones are stored in Amazon S3 Standard and are at least 128 KB in size. The company has millions of files, but downloads are infrequent for ringtones older than 90 days. The company needs to save money on storage while keeping the most accessed files readily available for its users. Which action should the company take to meet these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Implement an S3 Lifecycle policy that moves the objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days."
		],
		"wrongAnswersArray": [
			"Move the files to S3 Intelligent-Tiering and configure it to move objects to a less expensive storage tier after 90 days.",
			"Configure S3 Standard-Infrequent Access (S3 Standard-IA) storage for the initial storage tier of the objects.",
			"Configure S3 inventory to manage objects and move them to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days."
		]
	},
	{
		"question": "A company produces batch data that comes from different databases. The company also produces live stream data from network sensors and application APIs. The company needs to consolidate all the data into one place for business analytics. The company needs to process the incoming data and then stage the data in different Amazon S3 buckets. Teams will later run one-time queries and import the data into a business intelligence tool to show key performance indicators (KPIs). Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)",
		"correctAnswersArray": [
			"Use blueprints in AWS Lake Formation to identify the data that can be ingested into a data lake. Use AWS Glue to crawl the source, extract the data, and load the data into Amazon S3 in Apache Parquet format."
		],
		"wrongAnswersArray": [
			"Create custom AWS Lambda functions to move the individual records from the databases to an Amazon Redshift cluster.",
			"Use an AWS Glue extract, transform, and load (ETL) job to convert the data into JSON format. Load the data into multiple Amazon OpenSearch Service (Amazon Elasticsearch Service) clusters.",
			"Use Amazon Kinesis Data Analytics for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.",
			"Use Amazon Athena for one-time queries. Use Amazon QuickSight to create dashboards for KPIs."
		]
	},
	{
		"question": "A company is concerned about the security of its public web application due to recent web attacks. The application uses an Application Load Balancer (ALB). A solutions architect must reduce the risk of DDoS attacks against the application. What should the solutions architect do to meet this requirement?",
		"correctAnswersArray": [
			"Enable AWS Shield Advanced to prevent attacks."
		],
		"wrongAnswersArray": [
			"Add an Amazon Inspector agent to the ALB.",
			"Configure Amazon Macie to prevent attacks.",
			"Configure Amazon GuardDuty to monitor the ALB."
		]
	},
	{
		"question": "A company is developing a file-sharing application that will use an Amazon S3 bucket for storage. The company wants to serve all the files through an Amazon CloudFront distribution. The company does not want the files to be accessible through direct navigation to the S3 URL. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create an origin access identity (OAI). Assign the OAI to the CloudFront distribution. Configure the S3 bucket permissions so that only the OAI has read permission."
		],
		"wrongAnswersArray": [
			"Create an IAM user. Grant the user read permission to objects in the S3 bucket. Assign the user to CloudFront.",
			"Write an S3 bucket policy that assigns the CloudFront distribution ID as the Principal and assigns the target S3 bucket as the Amazon Resource Name (ARN).",
			"Write individual policies for each S3 bucket to grant read permission for only CloudFront access."
		]
	},
	{
		"question": "A company is migrating an application from on-premises servers to Amazon EC2 instances. As part of the migration design requirements, a solutions architect must implement infrastructure metric alarms. The company does not need to take action if CPU utilization increases to more than 50% for a short burst of time. However, if the CPU utilization increases to more than 50% and read IOPS on the disk are high at the same time, the company needs to act as soon as possible. The solutions architect also must reduce false alarms. What should the solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create Amazon CloudWatch composite alarms where possible."
		],
		"wrongAnswersArray": [
			"Create single Amazon CloudWatch metric alarms with multiple metric thresholds where possible.",
			"Create Amazon CloudWatch Synthetics canaries to monitor the application and raise an alarm.",
			"Create Amazon CloudWatch dashboards to visualize the metrics and react to issues quickly."
		]
	},
	{
		"question": "A gaming company is designing a highly available architecture. The application runs on a modified Linux kernel and supports only UDP-based traffic. The company needs the front-end tier to provide the best possible user experience. That tier must have low latency, route traffic to the nearest edge location, and provide static IP addresses for entry into the application endpoints. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Configure AWS Global Accelerator to forward requests to a Network Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group."
		],
		"wrongAnswersArray": [
			"Configure Amazon API Gateway to forward requests to an Application Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.",
			"Configure Amazon Route 53 to forward requests to an Application Load Balancer. Use AWS Lambda for the application in AWS Application Auto Scaling.",
			"Configure Amazon CloudFront to forward requests to a Network Load Balancer. Use AWS Lambda for the application in an AWS Application Auto Scaling group."
		]
	},
	{
		"question": "A company runs its ecommerce application on AWS. Every new order is published as a massage in a RabbitMQ queue that runs on an Amazon EC2 instance in a single Availability Zone. These messages are processed by a different application that runs on a separate EC2 instance. This application stores the details in a PostgreSQL database on another EC2 instance. All the EC2 instances are in the same Availability Zone. The company needs to redesign its architecture to provide the highest availability with the least operational overhead. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL."
		],
		"wrongAnswersArray": [
			"Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Create a third Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database",
			"Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Create another Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.",
			"Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL."
		]
	},
	{
		"question": "A company has a service that produces event data. The company wants to use AWS to process the event data as it is received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead. How should a solutions architect accomplish this?",
		"correctAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue."
		],
		"wrongAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.",
			"Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber.",
			"Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber."
		]
	},
	{
		"question": "A company needs to retain application log files for a critical application for 10 years. The application team regularly accesses logs from the past month for troubleshooting, but logs older than 1 month are rarely accessed. The application generates more than 10 TB of logs per month. Which storage option meets these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Store the logs in Amazon S3. Use S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive."
		],
		"wrongAnswersArray": [
			"Store the logs in Amazon CloudWatch Logs. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.",
			"Store the logs in Amazon CloudWatch Logs. Use Amazon S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.",
			"Store the logs in Amazon S3. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive."
		]
	},
	{
		"question": "A solutions architect needs to help a company optimize the cost of running an application on AWS. The application will use Amazon EC2 instances, AWS Fargate, and AWS Lambda for compute within the architecture. The EC2 instances will run the data ingestion layer of the application. EC2 usage will be sporadic and unpredictable. Workloads that run on EC2 instances can be interrupted at any time. The application front end will run on Fargate, and Lambda will serve the API layer. The front-end utilization and API layer utilization will be predictable over the course of the next year. Which combination of purchasing options will provide the MOST cost-effective solution for hosting this application? (Choose two.)",
		"correctAnswersArray": [
			"Purchase a 1-year Compute Savings Plan for the front end and API layer.",
			"Use Spot Instances for the data ingestion layer"
		],
		"wrongAnswersArray": [
			"Purchase 1-year All Upfront Reserved instances for the data ingestion layer.",
			"Use On-Demand Instances for the data ingestion layer",
			"Purchase a 1-year EC2 instance Savings Plan for the front end and API layer."
		]
	},
	{
		"question": "A company wants to migrate its on-premises data center to AWS. According to the company's compliance requirements, the company can use only the ap-northeast-3 Region. Company administrators are not permitted to connect VPCs to the internet. Which solutions will meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Use AWS Control Tower to implement data residency guardrails to deny internet access and deny access to all AWS Regions except ap-northeast-3."
		],
		"wrongAnswersArray": [
			"Create an outbound rule for the network ACL in each VPC to deny all traffic from 0.0.0.0/0. Create an IAM policy for each user to prevent the use of any AWS Region other than ap-northeast-3.",
			"Use AWS Config to activate managed rules to detect and alert for internet gateways and to detect and alert for new resources deployed outside of ap-northeast-3.",
			"Use AWS Organizations to configure service control policies (SCPS) that prevent VPCs from gaining internet access. Deny access to all AWS Regions except ap-northeast-3.",
			"Use rules in AWS WAF to prevent internet access. Deny access to all AWS Regions except ap-northeast-3 in the AWS account settings."
		]
	},
	{
		"question": "A company runs workloads on AWS. The company needs to connect to a service from an external provider. The service is hosted in the provider's VPC. According to the company’s security team, the connectivity must be private and must be restricted to the target service. The connection must be initiated only from the company’s VPC. Which solution will mast these requirements?",
		"correctAnswersArray": [
			"Ask the provider to create a VPC endpoint for the target service. Use AWS PrivateLink to connect to the target service."
		],
		"wrongAnswersArray": [
			"Ask the provider to create a virtual private gateway in its VPC. Use AWS PrivateLink to connect to the target service.",
			"Create a VPC peering connection between the company's VPC and the provider's VPC. Update the route table to connect to the target service.",
			"Create a NAT gateway in a public subnet of the company’s VPUpdate the route table to connect to the target service."
		]
	},
	{
		"question": "A company is building a containerized application on premises and decides to move the application to AWS. The application will have thousands of users soon after it is deployed. The company is unsure how to manage the deployment of containers at scale. The company needs to deploy the containerized application in a highly available architecture that minimizes operational overhead. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use target tracking to scale automatically based on demand."
		],
		"wrongAnswersArray": [
			"Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to scale out EC2 instances when the average CPU utilization threshold is breached.",
			"Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2 instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon CloudWatch. Launch new EC2 instances as needed.",
			"Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use target tracking to scale automatically based on demand."
		]
	},
	{
		"question": "A security team wants to limit access to specific services or actions in all of the team’s AWS accounts. All accounts belong to a large organization in AWS Organizations. The solution must be scalable and there must be a single point where permissions can be maintained. What should a solutions architect do to accomplish this?",
		"correctAnswersArray": [
			"Create a service control policy in the root organizational unit to deny access to the services or actions."
		],
		"wrongAnswersArray": [
			"Create a security group to allow accounts and attach it to user groups.",
			"Create cross-account roles in each account to deny access to the services or actions.",
			"Create an ACL to provide access to the services or actions."
		]
	},
	{
		"question": "An application runs on Amazon EC2 instances across multiple Availability Zones. The instances run in an Amazon EC2 Auto Scaling group behind an Application Load Balancer. The application performs best when the CPU utilization of the EC2 instances is at or near 40%. What should a solutions architect do to maintain the desired performance across all instances in the group?",
		"correctAnswersArray": [
			"Use a target tracking policy to dynamically scale the Auto Scaling group."
		],
		"wrongAnswersArray": [
			"Use a simple scaling policy to dynamically scale the Auto Scaling group.",
			"Use an AWS Lambda function ta update the desired Auto Scaling group capacity.",
			"Use scheduled scaling actions to scale up and scale down the Auto Scaling group."
		]
	},
	{
		"question": "A solutions architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a static website. The company’s security policy requires that all website traffic be inspected by AWS WAF. How should the solutions architect comply with these requirements?",
		"correctAnswersArray": [
			"Configure Amazon CloudFront and Amazon S3 to use an origin access identity (OAI) to restrict access to the S3 bucket. Enable AWS WAF on the distribution."
		],
		"wrongAnswersArray": [
			"Configure an S3 bucket policy to accept requests coming from the AWS WAF Amazon Resource Name (ARN) only.",
			"Configure Amazon CloudFront to forward all incoming requests to AWS WAF before requesting content from the S3 origin.",
			"Configure a security group that allows Amazon CloudFront IP addresses to access Amazon S3 only. Associate AWS WAF to CloudFront."
		]
	},
	{
		"question": "Organizers for a global event want to put daily reports online as static HTML pages. The pages are expected to generate millions of views from users around the world. The files are stored in an Amazon S3 bucket. A solutions architect has been asked to design an efficient and effective solution. Which action should the solutions architect take to accomplish this?",
		"correctAnswersArray": [
			"Use Amazon CloudFront with the S3 bucket as its origin."
		],
		"wrongAnswersArray": [
			"Generate presigned URLs for the files.",
			"Use the geoproximity feature of Amazon Route 53.",
			"Use cross-Region replication to all Regions."
		]
	},
	{
		"question": "A company uses a three-tier web application to provide training to new employees. The application is accessed for only 12 hours every day. The company is using an Amazon RDS for MySQL DB instance to store information and wants to minimize costs. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create AWS Lambda functions to start and stop the DB instance. Create Amazon EventBridge (Amazon CloudWatch Events) scheduled rules to invoke the Lambda functions. Configure the Lambda functions as event targets for the rules."
		],
		"wrongAnswersArray": [
			"Create an Amazon ElastiCache for Redis cache cluster that gives users the ability to access the data from the cache when the DB instance is stopped. Invalidate the cache after the DB instance is started.",
			"Launch an Amazon EC2 instance. Create an IAM role that grants access to Amazon RDS. Attach the role to the EC2 instance. Configure a cron job to start and stop the EC2 instance on the desired schedule.",
			"Configure an IAM policy for AWS Systems Manager Session Manager. Create an IAM role for the policy. Update the trust relationship of the role. Set up automatic start and stop for the DB instance."
		]
	},
	{
		"question": "A company stores data in an Amazon Aurora PostgreSQL DB cluster. The company must store all the data for 5 years and must delete all the data after 5 years. The company also must indefinitely keep audit logs of actions that are performed within the database. Currently, the company has automated backups configured for Aurora. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Use AWS Backup to take the backups and to keep the backups for 5 years.",
			"Configure an Amazon CloudWatch Logs export for the DB cluster."
		],
		"wrongAnswersArray": [
			"Take a manual snapshot of the DB cluster.",
			"Configure automated backup retention for 5 years.",
			"Create a lifecycle policy for the automated backups."
		]
	},
	{
		"question": "A company has a small Python application that processes JSON documents and outputs the results to an on-premises SQL database. The application runs thousands of times each day. The company wants to move the application to the AWS Cloud. The company needs a highly available solution that maximizes scalability and minimizes operational overhead. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Place the JSON documents in an Amazon S3 bucket. Create an AWS Lambda function that runs the Python code to process the documents as they arrive in the S3 bucket. Store the results in an Amazon Aurora DB cluster."
		],
		"wrongAnswersArray": [
			"Place the JSON documents in an Amazon Simple Queue Service (Amazon SQS) queue as messages. Deploy the Python code as a container on an Amazon Elastic Container Service (Amazon ECS) cluster that is configured with the Amazon EC2 launch type. Use the container to process the SQS messages. Store the results on an Amazon RDS DB instance.",
			"Place the JSON documents in an Amazon Elastic Block Store (Amazon EBS) volume. Use the EBS Multi-Attach feature to attach the volume to multiple Amazon EC2 instances. Run the Python code on the EC2 instances to process the documents. Store the results on an Amazon RDS DB instance.",
			"Place the JSON documents in an Amazon S3 bucket. Run the Python code on multiple Amazon EC2 instances to process the documents. Store the results in an Amazon Aurora DB cluster."
		]
	},
	{
		"question": "An ecommerce company hosts its analytics application in the AWS Cloud. The application generates about 300 MB of data each month. The data is stored in JSON format. The company is evaluating a disaster recovery solution to back up the data. The data must be accessible in milliseconds if it is needed, and the data must be kept for 30 days. Which solution meets these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Amazon S3 Standard"
		],
		"wrongAnswersArray": [
			"Amazon S3 Glacier",
			"Amazon RDS for PostgreSQL",
			"Amazon OpenSearch Service (Amazon Elasticsearch Service)"
		]
	},
	{
		"question": "A large media company hosts a web application on AWS. The company wants to start caching confidential media files so that users around the world will have reliable access to the files. The content is stored in Amazon S3 buckets. The company must deliver the content quickly, regardless of where the requests originate geographically. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers."
		],
		"wrongAnswersArray": [
			"Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application.",
			"Deploy AWS Global Accelerator to connect the S3 buckets to the web application.",
			"Use AWS DataSync to connect the S3 buckets to the web application."
		]
	},
	{
		"question": "A company runs an Oracle database on premises. As part of the company’s migration to AWS, the company wants to upgrade the database to the most recent available version. The company also wants to set up disaster recovery (DR) for the database. The company needs to minimize the operational overhead for normal operations and DR setup. The company also needs to maintain access to the database's underlying operating system. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Migrate the Oracle database to Amazon RDS Custom for Oracle. Create a read replica for the database in another AWS Region."
		],
		"wrongAnswersArray": [
			"Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to replicate the snapshots to another AWS Region.",
			"Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS Region.",
			"Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability Zone."
		]
	},
	{
		"question": "A solutions architect is optimizing a website for an upcoming musical event. Videos of the performances will be streamed in real time and then will be available on demand. The event is expected to attract a global online audience. Which service will improve the performance of both the real-time and on-demand streaming?",
		"correctAnswersArray": [
			"Amazon CloudFront"
		],
		"wrongAnswersArray": [
			"Amazon S3 Transfer Acceleration",
			"AWS Global Accelerator",
			"Amazon Route 53"
		]
	},
	{
		"question": "A company has a data ingestion workflow that includes the following components An Amazon Simple Notification Service (Amazon SNS) topic that receives notifications about new data deliveries An AWS Lambda function that processes and stores the data The ingestion workflow occasionally fails because of network connectivity issues. When failure occurs, the corresponding data is not ingested unless the company manually reruns the job. What should a solutions architect do to ensure that all notifications are eventually processed?",
		"correctAnswersArray": [
			"Configure an Amazon Simple Queue Service (Amazon SQS) queue as the on-failure destination. Modify the Lambda function to process messages in the queue."
		],
		"wrongAnswersArray": [
			"Configure the Lambda function for deployment across multiple Availability Zones.",
			"Modify the Lambda function's configuration to increase the CPU and memory allocations for the function.",
			"Configure the SNS topic’s retry strategy to increase both the number of retries and the wait time between retries."
		]
	},
	{
		"question": "A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics software is written in PHP and uses a MySQL database. The analytics software, the web server that provides PHP, and the database server are all hosted on the EC2 instance. The application is showing signs of performance degradation during busy times and is presenting 5xx errors. The company needs to make the application scale seamlessly. Which solution will meet these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Migrate the database to an Amazon Aurora MySQL DB instance. Create an AMI of the web application. Apply the AMI to a launch template. Create an Auto Scaling group with the launch template Configure the launch template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group."
		],
		"wrongAnswersArray": [
			"Migrate the database to an Amazon Aurora MySQL DB instance. Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization surpasses 75%.",
			"Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load to each EC2 instance.",
			"Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances."
		]
	},
	{
		"question": "A company runs a stateless web application in production on a group of Amazon EC2 On-Demand Instances behind an Application Load Balancer. The application experiences heavy usage during an 8-hour period each business day. Application usage is moderate and steady overnight. Application usage is low during weekends. The company wants to minimize its EC2 costs without affecting the availability of the application. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use Reserved Instances for the baseline level of usage. Use Spot instances for any additional capacity that the application needs."
		],
		"wrongAnswersArray": [
			"Use Spot Instances for the entire workload.",
			"Use Dedicated Instances for the baseline level of usage. Use On-Demand Instances for any additional capacity that the application needs.",
			"Use On-Demand Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs."
		]
	},
	{
		"question": "A company is running a publicly accessible serverless application that uses Amazon API Gateway and AWS Lambda. The application’s traffic recently spiked due to fraudulent requests from botnets. Which steps should a solutions architect take to block requests from unauthorized users? (Choose two.)",
		"correctAnswersArray": [
			"Implement an AWS WAF rule to target malicious requests and trigger actions to filter them out."
		],
		"wrongAnswersArray": [
			"Create a usage plan with an API key that is shared with genuine users only.",
			"Create an IAM role for each user attempting to access the API. A user will assume the role when making the API call.",
			"Integrate logic within the Lambda function to ignore the requests from fraudulent IP addresses.",
			"Convert the existing public API to a private API. Update the DNS records to redirect users to the new API endpoint."
		]
	},
	{
		"question": "A company is migrating its on-premises PostgreSQL database to Amazon Aurora PostgreSQL. The on-premises database must remain online and accessible during the migration. The Aurora database must remain synchronized with the on-premises database. Which combination of actions must a solutions architect take to meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Create an AWS Database Migration Service (AWS DMS) replication server."
		],
		"wrongAnswersArray": [
			"Convert the database schema by using the AWS Schema Conversion Tool (AWS SCT).",
			"Create an ongoing replication task.",
			"Create a database backup of the on-premises database.",
			"Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor the database synchronization."
		]
	},
	{
		"question": "A company runs a production application on a fleet of Amazon EC2 instances. The application reads the data from an Amazon SQS queue and processes the messages in parallel. The message volume is unpredictable and often has intermittent traffic. This application should continually process messages without any downtime. Which solution meets these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Use Reserved Instances for the baseline capacity and use Spot Instances to handle additional capacity."
		],
		"wrongAnswersArray": [
			"Use Spot Instances exclusively to handle the maximum capacity required",
			"Use Reserved Instances for the baseline capacity and use On-Demand Instances to handle additional capacity.",
			"Use Reserved Instances exclusively to handle the maximum capacity required."
		]
	},
	{
		"question": "A company’s website provides users with downloadable historical performance reports. The website needs a solution that will scale to meet the company’s website demands globally. The solution should be cost-effective, limit the provisioning of infrastructure resources, and provide the fastest possible response time. Which combination should a solutions architect recommend to meet these requirements?",
		"correctAnswersArray": [
			"Amazon CloudFront and Amazon S3"
		],
		"wrongAnswersArray": [
			"Application Load Balancer with Amazon EC2 Auto Scaling",
			"Amazon Route 53 with internal Application Load Balancers",
			"AWS Lambda and Amazon DynamoDB"
		]
	},
	{
		"question": "A company uses AWS Organizations to create dedicated AWS accounts for each business unit to manage each business unit's account independently upon request. The root email recipient missed a notification that was sent to the root user email address of one account. The company wants to ensure that all future notifications are not missed. Future notifications must be limited to account administrators. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Configure all AWS account root user email addresses as distribution lists that go to a few administrators who can respond to alerts. Configure AWS account alternate contacts in the AWS Organizations console or programmatically."
		],
		"wrongAnswersArray": [
			"Configure the company’s email server to forward notification email messages that are sent to the AWS account root user email address to all users in the organization.",
			"Configure all AWS account root user email messages to be sent to one administrator who is responsible for monitoring alerts and forwarding those alerts to the appropriate groups",
			"Configure all existing AWS accounts and all newly created accounts to use the same root user email address. Configure AWS account alternate contacts in the AWS Organizations console or programmatically."
		]
	},
	{
		"question": "A company wants to use high performance computing (HPC) infrastructure on AWS for financial risk modeling. The company’s HPC workloads run on Linux. Each HPC workflow runs on hundreds of Amazon EC2 Spot Instances, is short-lived, and generates thousands of output files that are ultimately stored in persistent storage for analytics and long-term future use. The company seeks a cloud storage solution that permits the copying of on-premises data to long-term persistent storage to make data available for processing by all EC2 instances. The solution should also be a high performance file system that is integrated with persistent storage to read and write datasets and output files. Which combination of AWS services meets these requirements?",
		"correctAnswersArray": [
			"Amazon FSx for Lustre integrated with Amazon S3"
		],
		"wrongAnswersArray": [
			"Amazon FSx for Windows File Server integrated with Amazon S3",
			"Amazon S3 Glacier integrated with Amazon Elastic Block Store (Amazon EBS)",
			"Amazon S3 bucket with a VPC endpoint integrated with an Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) volume"
		]
	},
	{
		"question": "A company provides an API to its users that automates inquiries for tax computations based on item prices. The company experiences a larger number of inquiries during the holiday season only that cause slower response times. A solutions architect needs to design a solution that is scalable and elastic. What should the solutions architect do to accomplish this?",
		"correctAnswersArray": [
			"Design a REST API using Amazon API Gateway that accepts the item names. API Gateway passes item names to AWS Lambda for tax computations."
		],
		"wrongAnswersArray": [
			"Create an Application Load Balancer that has two Amazon EC2 instances behind it. The EC2 instances will compute the tax on the received item names.",
			"Provide an API hosted on an Amazon EC2 instance. The EC2 instance performs the required computations when the API request is made.",
			"Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2 instance. API Gateway accepts and passes the item names to the EC2 instance for tax computations."
		]
	},
	{
		"question": "A company runs an application on a large fleet of Amazon EC2 instances. The application reads and writes entries into an Amazon DynamoDB table. The size of the DynamoDB table continuously grows, but the application needs only data from the last 30 days. The company needs a solution that minimizes cost and development effort. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Extend the application to add an attribute that has a value of the current timestamp plus 30 days to each new item that is created in the table. Configure DynamoDB to use the attribute as the TTL attribute."
		],
		"wrongAnswersArray": [
			"Use an EC2 instance that runs a monitoring application from AWS Marketplace. Configure the monitoring application to use Amazon DynamoDB Streams to store the timestamp when a new item is created in the table. Use a script that runs on the EC2 instance to delete items that have a timestamp that is older than 30 days.",
			"Use an AWS CloudFormation template to deploy the complete solution. Redeploy the CloudFormation stack every 30 days, and delete the original stack.",
			"Configure Amazon DynamoDB Streams to invoke an AWS Lambda function when a new item is created in the table. Configure the Lambda function to delete items in the table that are older than 30 days."
		]
	},
	{
		"question": "A company wants to migrate its MySQL database from on premises to AWS. The company recently experienced a database outage that significantly impacted the business. To ensure this does not happen again, the company wants a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two nodes. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Create an Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data."
		],
		"wrongAnswersArray": [
			"Create an Amazon RDS DB instance with synchronous replication to three nodes in three Availability Zones.",
			"Create an Amazon EC2 instance with a MySQL engine installed that triggers an AWS Lambda function to synchronously replicate the data to an Amazon RDS MySQL DB instance.",
			"Create an Amazon RDS MySQL DB instance and then create a read replica in a separate AWS Region that synchronously replicates the data."
		]
	},
	{
		"question": "A company has a Microsoft .NET application that runs on an on-premises Windows Server. The application stores data by using an Oracle Database Standard Edition server. The company is planning a migration to AWS and wants to minimize development changes while moving the application. The AWS application environment should be highly available. Which combination of actions should the company take to meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon RDS in a Multi-AZ deployment."
		],
		"wrongAnswersArray": [
			"Replatform the application to run on Amazon EC2 with the Amazon Linux Amazon Machine Image (AMI).",
			"Refactor the application as serverless with AWS Lambda functions running .NET Core.",
			"Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment.",
			"Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Amazon DynamoDB in a Multi-AZ deployment."
		]
	},
	{
		"question": "A company is running a batch application on Amazon EC2 instances. The application consists of a backend with multiple Amazon RDS databases. The application is causing a high number of reads on the databases. A solutions architect must reduce the number of database reads while ensuring high availability. What should the solutions architect do to meet this requirement?",
		"correctAnswersArray": [
			"Use Amazon ElastiCache for Redis."
		],
		"wrongAnswersArray": [
			"Use Amazon ElastiCache for Memcached.",
			"Add Amazon RDS read replicas.",
			"Use Amazon Route 53 DNS caching"
		]
	},
	{
		"question": "A company uses Amazon S3 as its data lake. The company has a new partner that must use SFTP to upload data files. A solutions architect needs to implement a highly available SFTP solution that minimizes operational overhead. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use AWS Transfer Family to configure an SFTP-enabled server with a publicly accessible endpoint. Choose the S3 data lake as the destination."
		],
		"wrongAnswersArray": [
			"Use Amazon S3 File Gateway as an SFTP server. Expose the S3 File Gateway endpoint URL to the new partner. Share the S3 File Gateway endpoint with the new partner.",
			"Launch Amazon EC2 instances in a private subnet in a VPC. Place a Network Load Balancer (NLB) in front of the EC2 instances. Create an SFTP listener port for the NLB. Share the NLB hostname with the new partner. Run a cron job script on the EC2 instances to upload files to the S3 data lake.",
			"Launch an Amazon EC2 instance in a private subnet in a VPInstruct the new partner to upload files to the EC2 instance by using a VPN. Run a cron job script, on the EC2 instance to upload files to the S3 data lake."
		]
	},
	{
		"question": "A company wants to manage Amazon Machine Images (AMIs). The company currently copies AMIs to the same AWS Region where the AMIs were created. The company needs to design an application that captures AWS API calls and sends alerts whenever the Amazon EC2 CreateImage API operation is called within the company’s account. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Create an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call. Configure the target as an Amazon Simple Notification Service (Amazon SNS) topic to send an alert when a CreateImage API call is detected."
		],
		"wrongAnswersArray": [
			"Create an AWS Lambda function to query AWS CloudTrail logs and to send an alert when a CreateImage API call is detected.",
			"Configure an Amazon Simple Queue Service (Amazon SQS) FIFO queue as a target for AWS CloudTrail logs. Create an AWS Lambda function to send an alert to an Amazon Simple Notification Service (Amazon SNS) topic when a CreateImage API call is detected.",
			"Configure AWS CloudTrail with an Amazon Simple Notification Service (Amazon SNS) notification that occurs when updated logs are sent to Amazon S3. Use Amazon Athena to create a new table and to query on CreateImage when an API call is detected."
		]
	},
	{
		"question": "A company is developing a marketing communications service that targets mobile app users. The company needs to send confirmation messages with Short Message Service (SMS) to its users. The users must be able to reply to the SMS messages. The company must store the responses for a year for analysis. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kinesis data stream for analysis and archiving."
		],
		"wrongAnswersArray": [
			"Use Amazon Simple Queue Service (Amazon SQS) to distribute the SMS messages. Use AWS Lambda to process the responses.",
			"Create an Amazon Simple Notification Service (Amazon SNS) FIFO topic. Subscribe an Amazon Kinesis data stream to the SNS topic for analysis and archiving.",
			"Create an Amazon Connect contact flow to send the SMS messages. Use AWS Lambda to process the responses."
		]
	},
	{
		"question": "A company’s infrastructure consists of Amazon EC2 instances and an Amazon RDS DB instance in a single AWS Region. The company wants to back up its data in a separate Region. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Use AWS Backup to copy EC2 backups and RDS backups to the separate Region."
		],
		"wrongAnswersArray": [
			"Create Amazon Machine Images (AMIs) of the EC2 instances. Copy the AMIs to the separate Region. Create a read replica for the RDS DB instance in the separate Region.",
			"Use Amazon Data Lifecycle Manager (Amazon DLM) to copy EC2 backups and RDS backups to the separate Region.",
			"Create Amazon Elastic Block Store (Amazon EBS) snapshots. Copy the EBS snapshots to the separate Region. Create RDS snapshots. Export the RDS snapshots to Amazon S3. Configure S3 Cross-Region Replication (CRR) to the separate Region."
		]
	},
	{
		"question": "A company has a multi-tier application that runs six front-end web servers in an Amazon EC2 Auto Scaling group in a single Availability Zone behind an Application Load Balancer (ALB). A solutions architect needs to modify the infrastructure to be highly available without modifying the application. Which architecture should the solutions architect choose that provides high availability?",
		"correctAnswersArray": [
			"Modify the Auto Scaling group to use three instances across each of two Availability Zones."
		],
		"wrongAnswersArray": [
			"Change the ALB in front of the Amazon EC2 instances in a round-robin configuration to balance traffic to the web tier.",
			"Create an Auto Scaling group that uses three instances across each of two Regions.",
			"Create an Auto Scaling template that can be used to quickly create more instances in another Region."
		]
	},
	{
		"question": "A company hosts a marketing website in an on-premises data center. The website consists of static documents and runs on a single server. An administrator updates the website content infrequently and uses an SFTP client to upload new documents. The company decides to host its website on AWS and to use Amazon CloudFront. The company’s solutions architect creates a CloudFront distribution. The solutions architect must design the most cost-effective and resilient architecture for website hosting to serve as the CloudFront origin. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create a private Amazon S3 bucket. Use an S3 bucket policy to allow access from a CloudFront origin access identity (OAI). Upload website content by using the AWS CLI."
		],
		"wrongAnswersArray": [
			"Create a virtual server by using Amazon Lightsail. Configure the web server in the Lightsail instance. Upload website content by using an SFTP client.",
			"Create an AWS Auto Scaling group for Amazon EC2 instances. Use an Application Load Balancer. Upload website content by using an SFTP client.",
			"Create a public Amazon S3 bucket. Configure AWS Transfer for SFTP. Configure the S3 bucket for website hosting. Upload website content by using the SFTP client."
		]
	},
	{
		"question": "An entertainment company is using Amazon DynamoDB to store media metadata. The application is read intensive and experiencing delays. The company does not have staff to handle additional operational overhead and needs to improve the performance efficiency of DynamoDB without reconfiguring the application. What should a solutions architect recommend to meet this requirement?",
		"correctAnswersArray": [
			"Use Amazon DynamoDB Accelerator (DAX)."
		],
		"wrongAnswersArray": [
			"Replicate data by using DynamoDB global tables.",
			"Use Amazon ElastiCache for Redis.",
			"Use Amazon ElastiCache for Memcached with Auto Discovery enabled."
		]
	},
	{
		"question": "An application runs on Amazon EC2 instances in private subnets. The application needs to access an Amazon DynamoDB table. What is the MOST secure way to access the table while ensuring that the traffic does not leave the AWS network?",
		"correctAnswersArray": [
			"Use a VPC endpoint for DynamoDB."
		],
		"wrongAnswersArray": [
			"Use a NAT gateway in a public subnet.",
			"Use a NAT instance in a private subnet.",
			"Use the internet gateway attached to the VPC."
		]
	},
	{
		"question": "A gaming company hosts a browser-based application on AWS. The users of the application consume a large number of videos and images that are stored in Amazon S3. This content is the same for all users. The application has increased in popularity, and millions of users worldwide accessing these media files. The company wants to provide the files to the users while reducing the load on the origin. Which solution meets these requirements MOST cost-effectively?",
		"correctAnswersArray": [
			"Deploy an Amazon CloudFront web distribution in front of the S3 bucket."
		],
		"wrongAnswersArray": [
			"Deploy an Amazon ElastiCache for Memcached instance in front of the web servers.",
			"Deploy an Amazon ElastiCache for Redis instance in front of the web servers.",
			"Deploy an AWS Global Accelerator accelerator in front of the web servers."
		]
	},
	{
		"question": "A company has an AWS account used for software engineering. The AWS account has access to the company’s on-premises data center through a pair of AWS Direct Connect connections. All non-VPC traffic routes to the virtual private gateway. A development team recently created an AWS Lambda function through the console. The development team needs to allow the function to access a database that runs in a private subnet in the company’s data center. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Configure the Lambda function to run in the VPC with the appropriate security group."
		],
		"wrongAnswersArray": [
			"Create an Elastic IP address. Configure the Lambda function to send traffic through the Elastic IP address without an elastic network interface.",
			"Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.",
			"Set up a VPN connection from AWS to the data center. Route the traffic from the Lambda function through the VPN."
		]
	},
	{
		"question": "A company’s order system sends requests from clients to Amazon EC2 instances. The EC2 instances process the orders and then store the orders in a database on Amazon RDS. Users report that they must reprocess orders when the system fails. The company wants a resilient solution that can process orders automatically if a system outage occurs. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Move the EC2 instances into an Auto Scaling group. Configure the order system to send messages to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the EC2 instances to consume messages from the queue."
		],
		"wrongAnswersArray": [
			"Move the EC2 instances into an Auto Scaling group. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to target an Amazon Elastic Container Service (Amazon ECS) task.",
			"Create an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function, and subscribe the function to the SNS topic. Configure the order system to send messages to the SNS topic. Send a command to the EC2 instances to process the messages by using AWS Systems Manager Run Command.",
			"Move the EC2 instances into an Auto Scaling group behind an Application Load Balancer (ALB). Update the order system to send messages to the ALB endpoint."
		]
	},
	{
		"question": "A company is designing a cloud communications platform that is driven by APIs. The application is hosted on Amazon EC2 instances behind a Network Load Balancer (NLB). The company uses Amazon API Gateway to provide external users with access to the application through APIs. The company wants to protect the platform against web exploits like SQL injection and also wants to detect and mitigate large, sophisticated DDoS attacks. Which combination of solutions provides the MOST protection? (Choose two.)",
		"correctAnswersArray": [
			"Use AWS WAF to protect Amazon API Gateway.",
			"Use AWS Shield Advanced with the NLB."
		],
		"wrongAnswersArray": [
			"Use AWS WAF to protect the NLB.",
			"Use Amazon GuardDuty with AWS Shield Standard",
			"Use AWS Shield Standard with Amazon API Gateway."
		]
	},
	{
		"question": "A company needs to run a critical application on AWS. The company needs to use Amazon EC2 for the application’s database. The database must be highly available and must fail over automatically if a disruptive event occurs. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Launch two EC2 instances, each in a different Availability Zone in the same AWS Region. Install the database on both EC2 instances. Configure the EC2 instances as a cluster. Set up database replication."
		],
		"wrongAnswersArray": [
			"Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use AWS CloudFormation to automate provisioning of the EC2 instance if a disruptive event occurs.",
			"Launch two EC2 instances, each in a different AWS Region. Install the database on both EC2 instances. Set up database replication. Fail over the database to a second Region.",
			"Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use EC2 automatic recovery to recover the instance if a disruptive event occurs."
		]
	},
	{
		"question": "A company is planning to move its data to an Amazon S3 bucket. The data must be encrypted when it is stored in the S3 bucket. Additionally, the encryption key must be automatically rotated every year. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Create an AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation. Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket."
		],
		"wrongAnswersArray": [
			"Create an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket. Manually rotate the KMS key every year.",
			"Encrypt the data with customer key material before moving the data to the S3 bucket. Create an AWS Key Management Service (AWS KMS) key without key material. Import the customer key material into the KMS key. Enable automatic key rotation.",
			"Move the data to the S3 bucket. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use the built-in key rotation behavior of SSE-S3 encryption keys."
		]
	},
	{
		"question": "An ecommerce company has an order-processing application that uses Amazon API Gateway and an AWS Lambda function. The application stores data in an Amazon Aurora PostgreSQL database. During a recent sales event, a sudden surge in customer orders occurred. Some customers experienced timeouts, and the application did not process the orders of those customers. A solutions architect determined that the CPU utilization and memory utilization were high on the database because of a large number of open connections. The solutions architect needs to prevent the timeout errors while making the least possible changes to the application. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda function to use the RDS Proxy endpoint instead of the database endpoint."
		],
		"wrongAnswersArray": [
			"Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Modify the Lambda function to use the DynamoDB table.",
			"Configure provisioned concurrency for the Lambda function. Modify the database to be a global database in multiple AWS Regions.",
			"Create a read replica for the database in a different AWS Region. Use query string parameters in API Gateway to route traffic to the read replica."
		]
	},
	{
		"question": "A company has a Windows-based application that must be migrated to AWS. The application requires the use of a shared Windows file system attached to multiple Amazon EC2 Windows instances that are deployed across multiple Availability Zone What should a solutions architect do to meet this requirement?",
		"correctAnswersArray": [
			"Configure Amazon FSx for Windows File Server. Mount the Amazon FSx file system to each Windows instance."
		],
		"wrongAnswersArray": [
			"Configure an Amazon Elastic Block Store (Amazon EBS) volume with the required size. Attach each EC2 instance to the volume. Mount the file system within the volume to each Windows instance.",
			"Configure AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows instance.",
			"Configure a file system by using Amazon Elastic File System (Amazon EFS). Mount the EFS file system to each Windows instance."
		]
	},
	{
		"question": "A solutions architect needs to securely store a database user name and password that an application uses to access an Amazon RDS DB instance. The application that accesses the database runs on an Amazon EC2 instance. The solutions architect wants to create a secure parameter in AWS Systems Manager Parameter Store. What should the solutions architect do to meet this requirement?",
		"correctAnswersArray": [
			"Create an IAM role that has read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM role to the EC2 instance."
		],
		"wrongAnswersArray": [
			"Create an IAM trust relationship between the Parameter Store parameter and the EC2 instance. Specify Amazon RDS as a principal in the trust policy.",
			"Create an IAM policy that allows read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM policy to the EC2 instance.",
			"Create an IAM trust relationship between the DB instance and the EC2 instance. Specify Systems Manager as a principal in the trust policy."
		]
	},
	{
		"question": "A company owns an asynchronous API that is used to ingest user requests and, based on the request type, dispatch requests to the appropriate microservice for processing. The company is using Amazon API Gateway to deploy the API front end, and an AWS Lambda function that invokes Amazon DynamoDB to store user requests before dispatching them to the processing microservices. The company provisioned as much DynamoDB throughput as its budget allows, but the company is still experiencing availability issues and is losing user requests. What should a solutions architect do to address this issue without impacting existing users?",
		"correctAnswersArray": [
			"Use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB."
		],
		"wrongAnswersArray": [
			"Create a secondary index in DynamoDB for the table with the user requests.",
			"Use DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB.",
			"Add throttling on the API Gateway with server-side throttling limits."
		]
	},
	{
		"question": "A company hosts its application on AWS. The company uses Amazon Cognito to manage users. When users log in to the application, the application fetches required data from Amazon DynamoDB by using a REST API that is hosted in Amazon API Gateway. The company wants an AWS managed solution that will control access to the REST API to reduce development efforts. Which solution will meet these requirements with the LEAST operational overhead?",
		"correctAnswersArray": [
			"Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request."
		],
		"wrongAnswersArray": [
			"For each user, create and assign an API key that must be sent with each request. Validate the key by using an AWS Lambda function.",
			"Configure an AWS Lambda function to be an authorizer in API Gateway to validate which user made the request.",
			"Send the user’s email address in the header with every request. Invoke an AWS Lambda function to validate that the user with that email address has proper access."
		]
	},
	{
		"question": "A company runs an application using Amazon ECS. The application creates resized versions of an original image and then makes Amazon S3 API calls to store the resized images in Amazon S3. How can a solutions architect ensure that the application has permission to access Amazon S3?",
		"correctAnswersArray": [
			"Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition."
		],
		"wrongAnswersArray": [
			"Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the container.",
			"Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch configuration used by the ECS cluster.",
			"Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS cluster while logged in as this account."
		]
	},
	{
		"question": "A telemarketing company is designing its customer call center functionality on AWS. The company needs a solution that provides multiple speaker recognition and generates transcript files. The company wants to query the transcript files to analyze the business patterns. The transcript files must be stored for 7 years for auditing purposes. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Use Amazon Transcribe for multiple speaker recognition. Use Amazon Athena for transcript file analysis."
		],
		"wrongAnswersArray": [
			"Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use Amazon Textract for transcript file analysis.",
			"Use Amazon Translate for multiple speaker recognition. Store the transcript files in Amazon Redshift. Use SQL queries for transcript file analysis.",
			"Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use machine learning models for transcript file analysis."
		]
	},
	{
		"question": "A company runs a containerized application on a Kubernetes cluster in an on-premises data center. The company is using a MongoDB database for data storage. The company wants to migrate some of these environments to AWS, but no code changes or deployment method changes are possible at this time. The company needs a solution that minimizes operational overhead. Which solution meets these requirements?",
		"correctAnswersArray": [
			"Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and Amazon DocumentDB (with MongoDB compatibility) for data storage."
		],
		"wrongAnswersArray": [
			"Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes for compute and Amazon DynamoDB for data storage.",
			"Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute and Amazon DynamoDB for data storage",
			"Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes for compute and MongoDB on EC2 for data storage."
		]
	},
	{
		"question": "An online retail company has more than 50 million active customers and receives more than 25,000 orders each day. The company collects purchase data for customers and stores this data in Amazon S3. Additional customer data is stored in Amazon RDS. The company wants to make all the data available to various teams so that the teams can perform analytics. The solution must provide the ability to manage fine-grained permissions for the data and must minimize operational overhead. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create a data lake by using AWS Lake Formation. Create an AWS Glue JDBC connection to Amazon RDS. Register the S3 bucket in Lake Formation. Use Lake Formation access controls to limit access."
		],
		"wrongAnswersArray": [
			"Create an Amazon Redshift cluster. Schedule an AWS Lambda function to periodically copy data from Amazon S3 and Amazon RDS toAmazon Redshift. Use Amazon Redshift access controls to limit access.",
			"Migrate the purchase data to write directly to Amazon RDS. Use RDS access controls to limit access.",
			"Schedule an AWS Lambda function to periodically copy data from Amazon RDS to Amazon S3. Create an AWS Glue crawler. Use Amazon Athena to query the data. Use S3 policies to limit access."
		]
	},
	{
		"question": "A solutions architect is creating a new Amazon CloudFront distribution for an application. Some of the information submitted by users is sensitive. The application uses HTTPS but needs another layer of security. The sensitive information should.be protected throughout the entire application stack, and access to the information should be restricted to certain applications. Which action should the solutions architect take?",
		"correctAnswersArray": [
			"Configure a CloudFront field-level encryption profile."
		],
		"wrongAnswersArray": [
			"Configure a CloudFront signed URL.",
			"Configure a CloudFront signed cookie.",
			"Configure CloudFront and set the Origin Protocol Policy setting to HTTPS Only for the Viewer Protocol Policy."
		]
	},
	{
		"question": "A company has a legacy data processing application that runs on Amazon EC2 instances. Data is processed sequentially, but the order of results does not matter. The application uses a monolithic architecture. The only way that the company can scale the application to meet increased demand is to increase the size of the instances. The company’s developers have decided to rewrite the application to use a microservices architecture on Amazon Elastic Container Service (Amazon ECS). What should a solutions architect recommend for communication between the microservices?",
		"correctAnswersArray": [
			"Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the data consumers to process data from the queue."
		],
		"wrongAnswersArray": [
			"Create an AWS Lambda function to pass messages. Add code to the data producers to call the Lambda function with a data object. Add code to the data consumers to receive a data object that is passed from the Lambda function.",
			"Create an Amazon DynamoDB table. Enable DynamoDB Streams. Add code to the data producers to insert data into the table. Add code to the data consumers to use the DynamoDB Streams API to detect new table entries and retrieve the data.",
			"Create an Amazon Simple Notification Service (Amazon SNS) topic. Add code to the data producers, and publish notifications to the topic. Add code to the data consumers to subscribe to the topic."
		]
	},
	{
		"question": "A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the ability to test new site features frequently. The company also needs a highly available and managed solution that requires minimum operational overhead. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between multiple Elastic Beanstalk environments for feature testing."
		],
		"wrongAnswersArray": [
			"Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load Balancer Controller to dynamically route traffic between containers that contain the new site features for testing.",
			"Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto Scaling groups and an Application Load Balancer to manage the website’s availability.",
			"Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the S3 bucket. Use AWS Lambda to process all dynamic content."
		]
	},
	{
		"question": "A solutions architect is designing the architecture of a new application being deployed to the AWS Cloud. The application will run on Amazon EC2 On-Demand Instances and will automatically scale across multiple Availability Zones. The EC2 instances will scale up and down frequently throughout the day. An Application Load Balancer (ALB) will handle the load distribution. The architecture needs to support distributed session data management. The company is willing to make changes to code if needed. What should the solutions architect do to ensure that the architecture supports distributed session data management?",
		"correctAnswersArray": [
			"Use Amazon ElastiCache to manage and store session data."
		],
		"wrongAnswersArray": [
			"Use session affinity (sticky sessions) of the ALB to manage session data.",
			"Use the GetSessionToken API operation in AWS Security Token Service (AWS STS) to manage the session.",
			"Use Session Manager from AWS Systems Manager to manage the session."
		]
	},
	{
		"question": "A company needs to store contract documents. A contract lasts for 5 years. During the 5-year period, the company must ensure that the documents cannot be overwritten or deleted. The company needs to encrypt the documents at rest and rotate the encryption keys automatically every year. Which combination of steps should a solutions architect take to meet these requirements with the LEAST operational overhead? (Choose two.)",
		"correctAnswersArray": [
			"Store the documents in Amazon S3. Use S3 Object Lock in compliance mode.",
			"Use server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys. Configure key rotation."
		],
		"wrongAnswersArray": [
			"Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure key rotation.",
			"Use server-side encryption with AWS Key Management Service (AWS KMS) customer provided (imported) keys. Configure key rotation.",
			"Store the documents in Amazon S3. Use S3 Object Lock in governance mode."
		]
	},
	{
		"question": "A company has an ordering application that stores customer information in Amazon RDS for MySQL. During regular business hours, employees run one-time queries for reporting purposes. Timeouts are occurring during order processing because the reporting queries are taking a long time to run. The company needs to eliminate the timeouts without preventing employees from performing queries. What should a solutions architect do to meet these requirements?",
		"correctAnswersArray": [
			"Create a read replica. Move reporting queries to the read replica."
		],
		"wrongAnswersArray": [
			"Create a read replica. Distribute the ordering application to the primary DB instance and the read replica.",
			"Schedule the reporting queries for non-peak hours.",
			"Migrate the ordering application to Amazon DynamoDB with on-demand capacity."
		]
	},
	{
		"question": "A hospital wants to create digital copies for its large collection of historical written records. The hospital will continue to add hundreds of new documents each day. The hospital’s data team will scan the documents and will upload the documents to the AWS Cloud. A solutions architect must implement a solution to analyze the documents, extract the medical information, and store the documents so that an application can run SQL queries on the data. The solution must maximize scalability and operational efficiency. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data."
		],
		"wrongAnswersArray": [
			"Write the document information to an Amazon EC2 instance that runs a MySQL database.",
			"Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text.",
			"Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant medical information from the text.",
			"Create an Auto Scaling group of Amazon EC2 instances to run a custom application that processes the scanned files and extracts the medical information."
		]
	},
	{
		"question": "The customers of a finance company request appointments with financial advisors by sending text messages. A web application that runs on Amazon EC2 instances accepts the appointment requests. The text messages are published to an Amazon Simple Queue Service (Amazon SQS) queue through the web application. Another application that runs on EC2 instances then sends meeting invitations and meeting confirmation email messages to the customers. After successful scheduling, this application stores the meeting information in an Amazon DynamoDB database. As the company expands, customers report that their meeting invitations are taking longer to arrive. What should a solutions architect recommend to resolve this issue?",
		"correctAnswersArray": [
			"Add an Auto Scaling group for the application that sends meeting invitations. Configure the Auto Scaling group to scale based on the depth of the SQS queue."
		],
		"wrongAnswersArray": [
			"Add an Amazon API Gateway API in front of the web application that accepts the appointment requests.",
			"Add a DynamoDB Accelerator (DAX) cluster in front of the DynamoDB database.",
			"Add an Amazon CloudFront distribution. Set the origin as the web application that accepts the appointment requests."
		]
	},
	{
		"question": "A company is building a new dynamic ordering website. The company wants to minimize server maintenance and patching. The website must be highly available and must scale read and write capacity as quickly as possible to meet changes in user demand. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon DynamoDB with on-demand capacity for the database. Configure Amazon CloudFront to deliver the website content."
		],
		"wrongAnswersArray": [
			"Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon Aurora with Aurora Auto Scaling for the database.",
			"Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon Aurora with Aurora Auto Scaling for the database. Configure Amazon CloudFront to deliver the website content.",
			"Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon DynamoDB with provisioned write capacity for the database."
		]
	},
	{
		"question": "A company is developing an ecommerce application that will consist of a load-balanced front end, a container-based application, and a relational database. A solutions architect needs to create a highly available solution that operates with as little manual intervention as possible. Which solutions meet these requirements? (Choose two.)",
		"correctAnswersArray": [
			"Create an Amazon RDS DB instance in Multi-AZ mode.",
			"Create an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load."
		],
		"wrongAnswersArray": [
			"Create an Amazon RDS DB instance and one or more replicas in another Availability Zone.",
			"Create an Amazon EC2 instance-based Docker cluster to handle the dynamic application load.",
			"Create an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load.",
			"Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type to handle the dynamic application load."
		]
	},
	{
		"question": "A company needs to move data from an Amazon EC2 instance to an Amazon S3 bucket. The company must ensure that no API calls and no data are routed through public internet routes. Only the EC2 instance can have access to upload data to the S3 bucket. Which solution will meet these requirements?",
		"correctAnswersArray": [
			"Create an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access."
		],
		"wrongAnswersArray": [
			"Run the nslookup tool from inside the EC2 instance to obtain the private IP address of the S3 bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.",
			"Use the AWS provided, publicly available ip-ranges.json file to obtain the private IP address of the S3 bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.",
			"Create a gateway VPC endpoint for Amazon S3 in the Availability Zone where the EC2 instance is located. Attach appropriate security groups to the endpoint. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access."
		]
	}
]

firstQuiz = true;
let lastQuiz = document.querySelector(".syllabus__topic--non-expandable.syllabus__topic--active").textContent.trim()

function startQuiz() {

	let thisQuiz = document.querySelector(".syllabus__topic--non-expandable.syllabus__topic--active").textContent.trim();
	let startQuiz = document.querySelectorAll('div.results__controls>button.btn> span');
	if (firstQuiz == true) {
		startQuiz.length > 0 ? startQuiz[0].click() : null;
		firstQuiz = false;
		selectAnswers()


	} else if (thisQuiz == lastQuiz) {
		let next = document.querySelector(".ember-view.active.btn.btn--success");
		if (!next || next.length < 1) {
			selectAnswers()
		}
		next.click()
		lastQuiz = document.querySelector(".syllabus__topic--non-expandable.syllabus__topic--active").textContent.trim()
		firstQuiz = true
	}
}

function nextQuestion() {
	let next = document.querySelectorAll('button.ember-view.btn.btn--large.btn--primary.btn--right > span');
	if (next && next.length > 0 && next[0].textContent === 'See Results') {
		lastQuiz = document.querySelector(".syllabus__topic--non-expandable.syllabus__topic--active").textContent.trim()
		next[0].click();
		return true;
	}
	if (next && next.length > 0) {
		next[0].click()
		return true
	} else {

		return false
	}
}

function retakeQuiz() {
	let retakeButton = document.querySelectorAll("button.btn>span");
	let x = false;
	if (retakeButton && retakeButton.length > 0) {
		retakeButton.forEach(button => {
			if (button.textContent.includes("Retake Quiz")) {
				button.click()
				x = true
			}
		})
	}
	if (x) {
		return true
	}
}

function questionMatch(jsonQuestion, testQuestion) {
	if (testQuestion.includes(jsonQuestion)) {
		return true
	} else {
		return false
	}
}

function selectAnswers() {
	let questionContent = document.querySelector('div.question__body > p');
	if (questionContent === undefined || questionContent === null) {

		nextQuestion() === false ? startQuiz() : null;
		return;
	}
	questionContent = questionContent.textContent;
	let potentialAnswers = document.querySelectorAll(".small-11.columns.leading-loose");
	let currentZQuestions;
	let multipleChoice = false;
	if (!potentialAnswers || potentialAnswers.length < 1) {
		let divChoice = document.querySelectorAll(".choice.choice--multiple.choice--selected--neutral>div.choice");
		potentialAnswers = []

		for (let i = 0; i < divChoice.length; i++) {
			div = divChoice[i]
			let spanChild = div.querySelector("span");
			if (spanChild) {
				div.removeChild(spanChild);
				potentialAnswers.push(div)
			}
		}
		multipleChoice = true;
	}



	for (const question of z) {
		if (questionMatch(question.question, questionContent)) {
			currentZQuestions = question;
		}
	}

	if (multipleChoice) {
		for (const div of potentialAnswers) {
			for (const answer of currentZQuestions.correctAnswersArray) {

				statementOne = div.textContent.trim().split(" ").join("").toLowerCase()
				statementTwo = answer.trim().split(" ").join("").toLowerCase()

				if (statementOne == statementTwo || statementOne.includes(statementTwo) || statementTwo.includes(statementOne)) {
					div.click()
				}
			}
		}
	} else {

		for (const answerOption of potentialAnswers) {
			for (const answer of currentZQuestions.correctAnswersArray) {
				statementOne = answerOption.textContent.trim().split(" ").join("").toLowerCase()
				statementTwo = answer.trim().split(" ").join("").toLowerCase()

				if (statementOne == statementTwo || statementOne.includes(statementTwo) || statementTwo.includes(statementOne)) {


					answerOption.click()
				}
			}
		}
	}


	nextQuestion() === false ? startQuiz() : null;
}


function main() {
	selectAnswers()
}

setInterval(main, 1500);
