"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[659],{4630:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=i(4848),s=i(8453);const r={sidebar_position:2,title:"Deployment via Screwdriver CD",description:"Deploying Kong API Gateway via Screwdriver CD Template"},a="Kong API Gateway Release Definition Template",l={id:"kong-api-gateway/screwdriver-cd-deployment",title:"Deployment via Screwdriver CD",description:"Deploying Kong API Gateway via Screwdriver CD Template",source:"@site/docs/kong-api-gateway/screwdriver-cd-deployment.md",sourceDirName:"kong-api-gateway",slug:"/kong-api-gateway/screwdriver-cd-deployment",permalink:"/zh-cn/docs/kong-api-gateway/screwdriver-cd-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/docs/docs/kong-api-gateway/screwdriver-cd-deployment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Deployment via Screwdriver CD",description:"Deploying Kong API Gateway via Screwdriver CD Template"},sidebar:"docSidebar",previous:{title:"General Deployment",permalink:"/zh-cn/docs/kong-api-gateway/"}},d={},o=[{value:"How to Use This Template",id:"how-to-use-this-template",level:2},{value:"Installing Template in Screwdriver",id:"installing-template-in-screwdriver",level:3},{value:"Using the Template",id:"using-the-template",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"kong-api-gateway-release-definition-template",children:"Kong API Gateway Release Definition Template"}),"\n",(0,n.jsxs)(t.p,{children:["hashicorp-aws offer a ",(0,n.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates/job-templates",children:"Screwdriver template"})," that deploys an\n",(0,n.jsx)(t.a,{href:"https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure",children:"immutable"})," instance of ",(0,n.jsx)(t.a,{href:"https://qubitpi.github.io/docs.konghq.com/",children:"Kong API Gateway"})," to AWS. It uses the\n",(0,n.jsx)(t.a,{href:"https://github.com/QubitPi/screwdriver-cd-template-main",children:"screwdriver-template-main npm package"})," to assist with template validation, publishing, and tagging. This template tags\nthe latest versions with the ",(0,n.jsx)(t.code,{children:"latest"})," tag."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Error loading kong-ports-diagram.png",src:i(932).A+"",width:"1662",height:"1064"})}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-this-template",children:"How to Use This Template"}),"\n",(0,n.jsx)(t.h3,{id:"installing-template-in-screwdriver",children:"Installing Template in Screwdriver"}),"\n",(0,n.jsx)(t.p,{children:"The template needs to be installed first in Screwdriver running instance. Installation has two parts:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/adaptors/screwdriver-cd/templates/kong-api-gateway-sd-template.yaml",children:"the template"})}),"\n",(0,n.jsxs)(t.li,{children:["Some ",(0,n.jsx)(t.a,{href:"https://github.com/QubitPi/screwdriver-cd-commands",children:"pre-defined Screwdriver commands"})," that this template uses"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The template and the commands can be automatically installed using the regular ",(0,n.jsx)(t.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/screwdriver.yaml",children:"screwdriver.yaml"})," config file by\nfollowing the steps below:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/quickstart#create-a-new-pipeline",children:"Create a Screwdriver pipeline"})," with the repository link being\n",(0,n.jsx)(t.code,{children:"https://github.com/QubitPi/hashicorp-aws.git"})]}),"\n",(0,n.jsx)(t.li,{children:"Trigger a pipeline run, which will install the templates and commands automatically. Wait the pipeline to finish\nrunning."}),"\n",(0,n.jsxs)(t.li,{children:["The installed template and commands can be found in ",(0,n.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates/job-templates#finding-templates",children:"Templates page"})," and\n",(0,n.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/commands#finding-commands",children:"Commands page"}),", respectively"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"using-the-template",children:"Using the Template"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates/job-templates#using-a-template",children:"Create a Screwdriver pipeline that uses this template"})," with the\n",(0,n.jsx)(t.code,{children:"screwdriver.yaml"})," file of"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"---\njobs:\n  main:\n    requires: [~pr, ~commit]\n    template: QubitPi/kong-api-gateway-release-definition-template@latest\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The following ",(0,n.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/configuration/secrets",children:"Screwdriver Secrets"})," needs to be defined before running the pipeline:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../setup#aws",children:(0,n.jsx)(t.code,{children:"AWS_ACCESS_KEY_ID"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../setup#aws",children:(0,n.jsx)(t.code,{children:"AWS_SECRET_ACCESS_KEY"})})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"SSL_CERTIFICATE"})," - the content of SSL certificate file serving HTTPS-enabled DNS name of the EC2 hosting our Kong\nAPI Gateway instance. This is the same as the ",(0,n.jsx)(t.code,{children:"SSL_CERTIFICATE"})," from the\n",(0,n.jsx)(t.a,{href:"../setup#optional-setup-ssl",children:"general SSL setup of hashicorp-aws"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"SSL_CERTIFICATE_KEY"})," - the content of SSL certificate key file serving HTTPS-enabled DNS name of the EC2 hosting our\nAPI Gateway instance. This is the same as the ",(0,n.jsx)(t.code,{children:"SSL_CERTIFICATE_KEY"})," from the\n",(0,n.jsx)(t.a,{href:"../setup#optional-setup-ssl",children:"general SSL setup of hashicorp-aws"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To run the pipeline, fill in the AWS-related ",(0,n.jsx)(t.strong,{children:"parameters"})," first"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Error kong-api-gateway-release-definition-template-parameters.png",src:i(3379).A+"",width:"834",height:"1419"})}),"\n",(0,n.jsxs)(t.p,{children:['Then hit "',(0,n.jsx)(t.strong,{children:"Submit"}),'" to start deploying.']})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},3379:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/kong-api-gateway-release-definition-template-parameters-b592a814383129cf13098b8ea981351c.png"},932:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/kong-ports-diagram-94dd812152799d6acdc342b76be0588a.png"},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var n=i(6540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);