"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5695],{9717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(5893),s=n(1151);const i={id:"objects",sidebar_label:"Objects",title:"Objects"},a="Server-Side Object Extensions",r={id:"extensions/objects",title:"Objects",description:"Garnet offers different ways to extent its functionality, one of them by adding your own implementation of a Custom Object; similar to what a Set, List or a Sorted Set offers but using your own type of object and custome commmands functionality with the C# language.",source:"@site/docs/extensions/objects.md",sourceDirName:"extensions",slug:"/extensions/objects",permalink:"/docs/extensions/objects",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/Garnet/tree/main/website/docs/extensions/objects.md",tags:[],version:"current",frontMatter:{id:"objects",sidebar_label:"Objects",title:"Objects"},sidebar:"garnetDocSidebar",previous:{title:"Raw Strings",permalink:"/docs/extensions/raw-strings"},next:{title:"Overview",permalink:"/docs/cluster/overview"}},c={},d=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"server-side-object-extensions",children:"Server-Side Object Extensions"}),"\n",(0,o.jsx)(t.p,{children:"Garnet offers different ways to extent its functionality, one of them by adding your own implementation of a Custom Object; similar to what a Set, List or a Sorted Set offers but using your own type of object and custome commmands functionality with the C# language."}),"\n",(0,o.jsx)(t.p,{children:"In this document we'll explain the implemenation of a new object type, based on the Dictionary type of C#, then we'll add some custom commands that will use this new object type."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Implementing a Custom Object"})}),"\n",(0,o.jsx)(t.p,{children:"In order to add a new object type, you first need to implement a new class that inherits from GarnetObjectBase class. This class contains escential methods to manage the basic functionality of a key in Garnet."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Adding a Factory class"})}),"\n",(0,o.jsx)(t.p,{children:"Once the new Custom Object class implementation has been added, it is required also a class that will manage the creation of this new Object type, this class is CustomObjectFactory."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"The Operate methods"})}),"\n",(0,o.jsx)(t.p,{children:"Every command in Garnet has a unique identifier in order to map the different operators to its corresponding type to which they can be applied. Take as an example the ZADD command, this command is only used on a Sorted Set type. In addition to its core functionality of the ZADD,  it contains optional functionality based on each of the flags or switches that the user can pass as part of the command expression."}),"\n",(0,o.jsx)(t.p,{children:"These both elements of a command expresion are called Command and Subcommand respectively.\nEach of them are applied in the following methods of the GarnetObjectBase class and you will need to add your custom functionality at these specific methods."}),"\n",(0,o.jsx)(t.p,{children:"The Operate method for a Command with a subcommand operator"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:"public abstract void Operate(byte subCommand, ReadOnlySpan<byte> input, ref (IMemoryOwner<byte>, int) output);\n"})}),"\n",(0,o.jsx)(t.p,{children:"The Operate method for a Command without subcommand operator"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:"public override sealed unsafe bool Operate(ref SpanByte input, ref SpanByteAndMemory output, out long sizeChange)\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsx)(t.mdxAdmonitionTitle,{}),(0,o.jsx)(t.p,{children:"As a reference of an implementation of a Custom Object type, see the example in GarnetServer\\MyDictObject.cs."})]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(7294);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);