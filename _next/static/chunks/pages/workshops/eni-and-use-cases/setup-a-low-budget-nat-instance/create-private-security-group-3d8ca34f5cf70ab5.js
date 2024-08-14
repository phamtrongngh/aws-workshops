(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[710],{3932:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/create-private-security-group",function(){return t(9516)}])},9516:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return d},default:function(){return p}});var s=t(5893),a=t(2673),r=t(7913),o=t(8426);t(9128);var i=t(2643),c={src:"/_next/static/media/security-group-7.5ba261af.png",height:730,width:2920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAJklEQVR42mP4/Pnzr1+/foPAHzgAchi+fPn68+dPCP8fDPz9+xcAlEIvDavOtNYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},u={src:"/_next/static/media/security-group-8.6b8cea8e.png",height:1156,width:2910,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADBAMAAABc5lN7AAAAJ1BMVEX8/Pz7+/v6+/v6+vv6+vr5+vr5+fr5+fn4+fr4+fn4+Pn39/f29/eXUPV8AAAAFklEQVR42mPYtrxFhOFIKpBYnDqJEQAsigVS23SfdAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3};let d=[];function _createMdxContent(e){let n=Object.assign({h1:"h1",p:"p",strong:"strong",ol:"ol",li:"li",img:"img",ul:"ul",code:"code",blockquote:"blockquote"},(0,i.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Create the Security Group for Private Instances"}),"\n",(0,s.jsxs)(n.p,{children:["In this section, we will create a ",(0,s.jsx)(n.strong,{children:"security group"})," for the ",(0,s.jsx)(n.strong,{children:"private instances"}),". This ",(0,s.jsx)(n.strong,{children:"security group"})," allows inbound traffic from local network and outbound traffic to everywhere."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"VPC console"}),", choose ",(0,s.jsx)(n.strong,{children:"Security Groups"})," in the sidebar."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Choose ",(0,s.jsx)(n.strong,{children:"Create security group"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enter ",(0,s.jsx)(n.strong,{children:"Security group name"}),", ",(0,s.jsx)(n.strong,{children:"Description"})," and select the ",(0,s.jsx)(n.strong,{children:"VPC"})," you created in the previous step.\n",(0,s.jsx)(n.img,{placeholder:"blur",src:c})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add one inbound rule with the following settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"All traffic"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Source"}),": ",(0,s.jsx)(n.code,{children:"10.0.0.0/16"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add one outbound rule with the following settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"All traffic"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Destination"}),": ",(0,s.jsx)(n.code,{children:"0.0.0.0/0"})," (everywhere)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{placeholder:"blur",src:u})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Note: For simplicity, we allow all traffic in local network to the private instances. In a production environment, you should restrict it to only the necessary ports and sources."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Choose ",(0,s.jsx)(n.strong,{children:"Create security group"}),"."]}),"\n"]}),"\n"]})]})}let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/create-private-security-group.mdx",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/create-private-security-group",timestamp:1723654418e3,pageMap:[{kind:"Meta",data:{index:"Introduction",overview:"Overview","before-you-start":"Before You Start",workshops:"Workshops",contact:{title:"Contact ↗",type:"page",href:"https://www.linkedin.com/in/nghia-pham-70a0ab205/",newWindow:!0}}},{kind:"MdxPage",name:"before-you-start",route:"/before-you-start"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"overview",route:"/overview"},{kind:"Folder",name:"workshops",route:"/workshops",children:[{kind:"Meta",data:{"eni-and-use-cases":"Elastic Network Interfaces (ENIs) and Use Cases"}},{kind:"Folder",name:"eni-and-use-cases",route:"/workshops/eni-and-use-cases",children:[{kind:"Meta",data:{"setup-a-low-budget-nat-instance":"Setup a Low-Budget NAT Instance","setup-a-low-budget-load-balancer":{display:"hidden",title:"Setup a Low Budget Load Balancer"}}},{kind:"MdxPage",name:"setup-a-low-budget-load-balancer",route:"/workshops/eni-and-use-cases/setup-a-low-budget-load-balancer"},{kind:"Folder",name:"setup-a-low-budget-nat-instance",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance",children:[{kind:"Meta",data:{"create-a-vpc":"1. Create a VPC","create-private-security-group":"2. Create the Security Group for the Private Instances","create-nat-security-group":"3. Create the Security Group for the NAT Instance","create-nat-role":"4. Create IAM Role for the NAT Instance","create-an-eni":"5. Create an ENI","update-private-route-tables":"6. Update Private Route Tables","create-nat-launch-template":"7. Create Launch Template for the NAT Instance","launch-nat-instance-with-asg":"8. Launch NAT Instance with Auto Scaling Group","test-nat-instance":"9. Test the NAT Instance","clean-up":"10. Clean Up",conclusion:"11. Conclusion"}},{kind:"MdxPage",name:"clean-up",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/clean-up"},{kind:"MdxPage",name:"conclusion",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/conclusion"},{kind:"MdxPage",name:"create-a-vpc",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/create-a-vpc"},{kind:"MdxPage",name:"create-an-eni",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/create-an-eni"},{kind:"MdxPage",name:"create-nat-launch-template",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/create-nat-launch-template"},{kind:"MdxPage",name:"create-nat-role",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/create-nat-role"},{kind:"MdxPage",name:"create-nat-security-group",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/create-nat-security-group"},{kind:"MdxPage",name:"create-private-security-group",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/create-private-security-group"},{kind:"MdxPage",name:"launch-nat-instance-with-asg",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/launch-nat-instance-with-asg"},{kind:"MdxPage",name:"test-nat-instance",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/test-nat-instance"},{kind:"MdxPage",name:"update-private-route-tables",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/update-private-route-tables"}]},{kind:"MdxPage",name:"setup-a-low-budget-nat-instance",route:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance"}]},{kind:"MdxPage",name:"eni-and-use-cases",route:"/workshops/eni-and-use-cases"}]},{kind:"MdxPage",name:"workshops",route:"/workshops"}],flexsearch:{codeblocks:!0},title:"Create the Security Group for Private Instances",headings:d},pageNextRoute:"/workshops/eni-and-use-cases/setup-a-low-budget-nat-instance/create-private-security-group",nextraLayout:r.ZP,themeConfig:o.Z};var p=(0,a.j)(l)},8426:function(e,n,t){"use strict";var s=t(5893);t(7294);var a=t(5675),r=t.n(a);let o={head:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{property:"og:title",content:"Benlab"}),(0,s.jsx)("meta",{property:"og:description",content:"Let's learn together"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",href:"/images/logo.png"})]}),logo:(0,s.jsxs)("span",{children:[(0,s.jsx)(r(),{className:"rounded-full",src:"/images/logo.png",alt:"logo",height:50,width:50,style:{borderRadius:"50%",display:"inline-block"}})," ",(0,s.jsx)("b",{children:"BENLAB'S WORKSHOPS"})]}),project:{link:"https://github.com/phamtrongngh/aws-workshops"},docsRepositoryBase:"https://github.com/phamtrongngh/aws-workshops",footer:{text:""},editLink:{component:null},feedback:{content:"Give feedback"},useNextSeoProps:()=>({titleTemplate:"%s - Benlab's Workshops"})};n.Z=o},5789:function(){}},function(e){e.O(0,[774,543,888,179],function(){return e(e.s=3932)}),_N_E=e.O()}]);