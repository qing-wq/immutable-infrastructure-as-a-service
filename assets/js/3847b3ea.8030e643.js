"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[214],{1111:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(4848),s=i(8453);const r={sidebar_position:2,title:"Setup"},o=void 0,a={id:"setup",title:"Setup",description:"[//]: # (Copyright 2024 Paion Data. All rights reserved.)",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/docs/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/docs/docs/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Setup"},sidebar:"docSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Kong API Gateway",permalink:"/docs/category/kong-api-gateway"}},l={},c=[{value:"Setup",id:"setup",level:2},{value:"Installing HashiCorp Packer &amp; Terraform",id:"installing-hashicorp-packer--terraform",level:3},{value:"Getting IIaaS Deployment Tool",id:"getting-iiaas-deployment-tool",level:3},{value:"Alicloud",id:"alicloud",level:3},{value:"SSL",id:"ssl",level:3},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"domain&#39;s nameservers may be malfunctioning",id:"domains-nameservers-may-be-malfunctioning",level:5},{value:"DNSSEC: DNSKEY Missing",id:"dnssec-dnskey-missing",level:5}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.h3,{id:"installing-hashicorp-packer--terraform",children:"Installing HashiCorp Packer & Terraform"}),"\n",(0,t.jsx)(n.p,{children:"Deployment using Packer & Terraform requires command line tools which can be installed by following the instructions\nin the links below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.hashicorp.com/packer/install",children:"Installing Packer"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.hashicorp.com/terraform/install",children:"Installing Terraform"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"getting-iiaas-deployment-tool",children:"Getting IIaaS Deployment Tool"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"git clone https://github.com/paion-data/immutable-infrastructure-as-a-service.git\n"})}),"\n",(0,t.jsx)(n.h3,{id:"alicloud",children:"Alicloud"}),"\n",(0,t.jsx)(n.p,{children:"The following environment variables need to be defined:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"ALICLOUD_ACCESS_KEY"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"ALICLOUD_SECRET_KEY"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The two variables are Alicloud credentials required by Alicloud\n",(0,t.jsx)(n.a,{href:"https://developer.hashicorp.com/packer/integrations/hashicorp/alicloud/latest/components/builder/alicloud-ecs",children:"Packer integration"}),"\nand ",(0,t.jsx)(n.a,{href:"https://registry.terraform.io/providers/aliyun/alicloud/latest/docs#environment-variables",children:"Terraform integration"})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://www.alibabacloud.com/product/ram",children:"RAM user"})," associated with the credentials above must have the following\npermissions to manage the ECS on Alicloud:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AliyunECSFullAccess"}),"\n",(0,t.jsx)(n.li,{children:"AliyunVPCFullAccess"}),"\n",(0,t.jsx)(n.li,{children:"AliyunEIPFullAccess"}),"\n"]})]}),"\n",(0,t.jsx)(n.h3,{id:"ssl",children:"SSL"}),"\n",(0,t.jsx)(n.p,{children:"Coming soon..."}),"\n",(0,t.jsx)(n.h4,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.h5,{id:"domains-nameservers-may-be-malfunctioning",children:"domain's nameservers may be malfunctioning"}),"\n",(0,t.jsxs)(n.p,{children:["Suppose we are obtaining the certificate for a domain called ",(0,t.jsx)(n.code,{children:"app.my-domain.com"}),". If executing ",(0,t.jsx)(n.code,{children:"sudo certbot"})," gives the\nfollowing error:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Certbot failed to authenticate some domains (authenticator: nginx). The Certificate Authority reported these problems:\nDomain: app.my-domain.com Type: dns Detail: DNS problem: SERVFAIL looking up A for app.my-domain.com - the domain's\nnameservers may be malfunctioning; DNS problem: SERVFAIL looking up AAAA for app.my-domain.com - the domain's\nnameservers may be malfunctioning\n"})}),"\n",(0,t.jsx)(n.p,{children:"There could be multiple reasons for the error above. Please check in the following orders"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Please make sure ports 80 and 443 are open for in-coming traffics from all sources ",(0,t.jsx)(n.em,{children:"at the time of domain\nverification"})]}),"\n",(0,t.jsxs)(n.li,{children:["Please double-check that the public IP address of the machine running the command ",(0,t.jsx)(n.code,{children:"sudo certbot"})," matches the DNS\nrecord for the target domain. For example, if the public IP of this machine is ",(0,t.jsx)(n.code,{children:"120.45.67.11"}),", then there must exist\na type-A record on the domain DNS registar for ",(0,t.jsx)(n.code,{children:"app.my-domain.com"})," with it's resolving IP of ",(0,t.jsx)(n.code,{children:"120.45.67.11"})]}),"\n",(0,t.jsxs)(n.li,{children:["(",(0,t.jsx)(n.strong,{children:"If the domain has recently been transfered to another registar by user"}),") It is possible that DNS resolving is\nstill employing the old ",(0,t.jsx)(n.a,{href:"https://www.domain.com/help/article/what-is-a-nameserver",children:"DNS name servers"})," which makes themselves unaccessible for some reasons. This, for example,\nhappens when we have requested a domain transfer from Google Domain to Alicloud Cloud DNS Domain registar. We will\nneed to update the DNS name servers then"]}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"dnssec-dnskey-missing",children:"DNSSEC: DNSKEY Missing"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Certbot failed to authenticate some domains (authenticator: nginx). The Certificate Authority reported these problems:\nDomain: app.my-domain.com Type: dns Detail: DNS problem: looking up A for app.my-domain.com: DNSSEC: DNSKEY Missing; DNS\nproblem: looking up AAAA for app.my-domain.com: DNSSEC: DNSKEY Missing\n"})}),"\n",(0,t.jsx)(n.p,{children:'The error message "DNSKEY Missing" means that a domain has not passed DNSSEC validation. Here are some things we can\ndo:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Contact the domain's registrar: Confirm that the DS record matches the authoritative DNS provider's specifications."}),"\n",(0,t.jsx)(n.li,{children:"Disable DNSSEC: Turn off DNSSEC on the registrar."}),"\n",(0,t.jsx)(n.li,{children:"Issue new certificates: Renew the certificates to reset the clock and give yourself 90 days to fix the issue."}),"\n",(0,t.jsx)(n.li,{children:"Reenable DNSSEC: After renewing the certificates, reenable DNSSEC and test cert renewals."}),"\n",(0,t.jsx)(n.li,{children:"Ensure the customer managed key is enabled: Make sure that the customer managed key that your KSK is based on is\nenabled and has the correct permissions."}),"\n",(0,t.jsx)(n.li,{children:"Create DNSSEC keys from the correct device: Ensure that you are trying to create DNSSEC keys from the correct device\nwith a database key variable designation of 0."}),"\n",(0,t.jsxs)(n.li,{children:["Ensure device certificates have unique names: If the device certificates have the same common name, renew them with\nunique names and re-exchange them via the ",(0,t.jsx)(n.code,{children:"gtm_add <IP>"})," script."]}),"\n",(0,t.jsx)(n.li,{children:"Remove the DS record: If you don't want to have the zone signed, remove the DS record."}),"\n",(0,t.jsx)(n.li,{children:"Set the DS records for the subdomain: Use the values after clicking on the (i) near the main subdomain"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);