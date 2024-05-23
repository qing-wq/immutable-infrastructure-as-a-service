"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[840],{7025:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=a(4848),t=a(8453);a(6540),a(2303);const s={sidebar_position:1,title:"General Deployment",description:"Deploying Kong API Gateway via Native HashiCorp Commands"},r="Deploying Kong API Gateway",o={id:"kong-api-gateway/index",title:"General Deployment",description:"Deploying Kong API Gateway via Native HashiCorp Commands",source:"@site/docs/kong-api-gateway/index.mdx",sourceDirName:"kong-api-gateway",slug:"/kong-api-gateway/",permalink:"/docs/kong-api-gateway/",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/docs/docs/kong-api-gateway/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"General Deployment",description:"Deploying Kong API Gateway via Native HashiCorp Commands"},sidebar:"docSidebar",previous:{title:"Kong API Gateway",permalink:"/docs/category/kong-api-gateway"},next:{title:"General Troubleshooting",permalink:"/docs/troubleshooting"}},l={},c=[{value:"General Deployments",id:"general-deployments",level:2},{value:"Defining Packer Variables",id:"defining-packer-variables",level:3},{value:"Defining Terraform Variables",id:"defining-terraform-variables",level:3},{value:"Building AMI Image",id:"building-ami-image",level:3},{value:"Deploying to ECS",id:"deploying-to-ecs",level:3},{value:"Enable JWT Plugin",id:"enable-jwt-plugin",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"deploying-kong-api-gateway",children:"Deploying Kong API Gateway"}),"\n",(0,i.jsxs)(n.p,{children:["IIaaS deploys ",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/docker-kong",children:"Kong API Gateway"})," in the following way:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Deploys ",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/docker-kong",children:"Kong API Gateway"})," in ",(0,i.jsx)(n.strong,{children:"HTTP"})," mode"]}),"\n",(0,i.jsxs)(n.li,{children:["Deploys a reverse proxy Nginx in front of the ",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/docker-kong",children:"Kong API Gateway"})," in the same EC2 to redirect all HTTPS request to\ngateway's ",(0,i.jsx)(n.a,{href:"https://docs.konghq.com/gateway/latest/production/networking/default-ports/",children:"corresponding"})," HTTP ports"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The diagrams below illustrates the resulting deployment"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Error loading kong-deployment-diagram.png",src:a(8952).A+"",width:"2778",height:"728"})}),"\n",(0,i.jsx)(n.h2,{id:"general-deployments",children:"General Deployments"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Please complete the ",(0,i.jsx)(n.a,{href:"../setup#setup",children:"general setup"})," before proceeding."]})}),"\n",(0,i.jsxs)(n.admonition,{title:"Supporting HTTPS Protocol",type:"tip",children:[(0,i.jsxs)(n.p,{children:["IIaaS uses a ",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/docker-kong",children:"customized fork of docker-kong"})," to\n",(0,i.jsx)(n.a,{href:"https://github.com/QubitPi/docker-kong/pull/1",children:"fully separate the app and SSL"}),", and, therefore, the Nginx config needs\nmultiple ",(0,i.jsx)(n.a,{href:"https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks/",children:"servers"}),"\nto ensure all HTTPS ports are mapped to their corresponding HTTP ports as shown in the config snippet below:"]}),(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["All relevant HTTP and HTTPS ports are listed in ",(0,i.jsx)(n.a,{href:"https://docs.konghq.com/gateway/latest/production/networking/default-ports/",children:"Kong's documentation here"}),". In general,\nour Nginx should **listen on an HTTPS port and ",(0,i.jsx)(n.code,{children:"proxy_pass"})," to an HTTP port. For example, ports 8443 and 8444 are\n",(0,i.jsx)(n.code,{children:"proxy_pass"}),"ed to 8000 and 8001, respectively, both of which are listed in the doc."]}),(0,i.jsx)(n.p,{children:"One special case is HTTP port 8000, which is the redirect port. iiaas maps the standard SSL 443 port to 8000 so that any\ndownstream (such as UI web app) simply needs to hit the domain without specifying port number and have its request be\nreidrected to upstream services (such as database webservice)"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Error loading kong-ports-diagram.png",src:a(932).A+"",width:"1662",height:"1064"})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"defining-packer-variables",children:"Defining Packer Variables"}),"\n",(0,i.jsxs)(n.p,{children:["Create a [HashiCorp Packer variable values file] named ",(0,i.jsx)(n.strong,{children:"ali-kong.auto.pkrvars.hcl"})," under\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/hashicorp/kong-api-gateway/images",children:"immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/images"})})," directory with the following contents:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-hcl",metastring:'title="immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/images/ali-kong.auto.pkrvars.hcl"',children:'ali_image_name          = "my-kong-ecs"\ninstance_type           = "my-kong-ami"\nregion                  = "cn-shenzhen"\nssl_cert_source         = "/path/to/ssl.crt"\nssl_cert_key_source     = "/path/to/ssl.key"\nkong_api_gateway_domain = "gateway.mycompany.com"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ali_image_name"})," is the ",(0,i.jsx)(n.a,{href:"https://www.alibabacloud.com/product/ecs",children:"Alicloud ECS"})," image name, which can be either English or Chinese characters. It can begin\nwith an uppercase/lowercase letter or a Chinese character, and may contain numbers, ",(0,i.jsx)(n.code,{children:"_"})," or ",(0,i.jsx)(n.code,{children:"-"}),", but cannot begin with\n",(0,i.jsx)(n.code,{children:"http://"})," or ",(0,i.jsx)(n.code,{children:"https://"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"instance_type"})," is the ",(0,i.jsx)(n.a,{href:"https://www.alibabacloud.com/help/doc-detail/25378.htm",children:"type of the machine"})," for building the ECS image."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"region"})," is the ",(0,i.jsx)(n.a,{href:"https://www.alibabacloud.com/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones",children:"Alicloud region ID"})," which hosts the ECS instance that is used to build the image."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ssl_cert_source"})," is the absolute path or the path relative to\n",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/hashicorp/kong-api-gateway/images",children:"immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/images"})," of the\n",(0,i.jsx)(n.a,{href:"../setup#ssl",children:"SSL certificate file"})," for the Kong API Gateway domain"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ssl_cert_key_source"})," is the absolute path or the path relative to\n",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/hashicorp/kong-api-gateway/images",children:"immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/images"})," of the\n",(0,i.jsx)(n.a,{href:"../setup#ssl",children:"SSL certificate key file"})," for the Kong API Gateway domain"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"kong_api_gateway_domain"})," is the SSL-enabled domain that will serve the\n",(0,i.jsx)(n.a,{href:"https://docs.konghq.com/gateway/latest/production/networking/default-ports/",children:"various ports of Kong gateway"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"defining-terraform-variables",children:"Defining Terraform Variables"}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.a,{href:"https://developer.hashicorp.com/terraform/language/values/variables#variable-definitions-tfvars-files",children:"HashiCorp Terraform variable values file"})," named ",(0,i.jsx)(n.strong,{children:"ali-kong.auto.tfvars"})," under\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/hashicorp/kong-api-gateway/instances",children:"immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/instances"})})," directory with the following contents:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-hcl",metastring:'title="immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/instances/ali-kong.auto.tfvars"',children:"image_id        =\nvswitch_id      =\ninstance_type   =\ninstance_name   =\nsecurity_groups =\n"})}),"\n",(0,i.jsx)(n.h3,{id:"building-ami-image",children:"Building AMI Image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'cd immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/images\ncp alicloud/* .\npacker init .\npacker validate -var "skip_create_ami=true" .\npacker build -var "skip_create_ami=false" .\n'})}),"\n",(0,i.jsx)(n.h3,{id:"deploying-to-ecs",children:"Deploying to ECS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"cd ../instances\ncp alicloud/* .\nterraform init\nterraform validate\nterraform apply -auto-approve\n"})}),"\n",(0,i.jsx)(n.h3,{id:"enable-jwt-plugin",children:"Enable JWT Plugin"}),"\n",(0,i.jsxs)(n.p,{children:["In IIaaS, ",(0,i.jsx)(n.a,{href:"https://docs.konghq.com/hub/kong-inc/jwt/",children:"JWT Plugin"})," is used to authenticate the validity of the access token int the request header. To use it, you\nneed to enable it in Kong Admin API. Follow the steps below:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Enable the plugin globally in order to be effective in all requests and configure the required configuration\nsuch as ",(0,i.jsx)(n.code,{children:"name"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'curl -X POST http://localhost:8001/plugins/ \\\n   --header "accept: application/json" \\\n   --header "Content-Type: application/json" \\\n   --data \'\n   {\n      "name": "jwt"\n   }\n   \'\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Create a consumer. The purpose of creating a consumer is to manage credentials."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"curl -X POST http://localhost:8001/consumers -d username=my-consumer\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Create a JWT credential for the consumer. JWT credential is important to validate token. It relies primarily on\nthree parts in JWT credential:"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"key"}),": The issuer of JWT token, which is corresponded to the iss field in the payload of JWT token after parsing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"algorithm"}),": The algorithm used to verify the token\u2019s signature."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"secret"})," or ",(0,i.jsx)(n.code,{children:"rsa_public_key"}),": Depending on the type of algorithm, decide whether you need to set secret or\nrsa_public_key. It should be noted that: the rsa_public_key must be in REM format and the value of secret will be\ngenerated randomly when it is not set."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'curl -X POST http://localhost:8001/consumers/my-consumer/jwt \\\n   --header "Content-Type: application/json" \\\n   --data \'\n   {\n      "algorithm": "<you_algorithm>", \n      "rsa_public_key": "<your_public_key>",\n      "key": "<you_token_iss>"\n   }\n   \'\n'})}),"\n",(0,i.jsxs)(n.p,{children:["After do those, all requests with a JWT token of valid signature will be proxied to upstream service.\nBut if the following conditions occur in the request, it will be rejected and the response status code will be ",(0,i.jsx)(n.code,{children:"401"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"has no JWT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"missing or invalid iss claim"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"invalid signature"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"valid signature, invalid verified claim optional"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8952:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/kong-deployment-diagram-0e603dd1e4fb96d8c09f228e1ff31894.png"},932:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/kong-ports-diagram-94dd812152799d6acdc342b76be0588a.png"},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var i=a(6540);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);