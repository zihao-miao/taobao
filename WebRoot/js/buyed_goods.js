var china=document.getElementsByClassName("china")[0];
var addre=document.getElementsByClassName("addre")[0];
var mytaobao=document.getElementsByClassName("mytaobao")[0];
var list_mytaobao=document.getElementsByClassName("list_mytaobao")[0];
var shoucang=document.getElementsByClassName("shoucang")[0];
var list_shoucang=document.getElementsByClassName("list_shoucang")[0];
var seller=document.getElementsByClassName("seller")[0];
var list_seller=document.getElementsByClassName("list_seller")[0];
var customer=document.getElementsByClassName("customer")[0];
var list_customer=document.getElementsByClassName("list_customer")[0];
var nav1=document.getElementsByClassName("nav1")[0];
var listsum=document.getElementsByClassName("listsum")[0];
var dd_ul=document.getElementsByClassName("dd_ul");
var b=document.getElementsByTagName("b");
var user_kuang=document.getElementsByClassName("user_kuang")[0];
var a=document.getElementsByTagName("a");
var float_user=document.getElementsByClassName("float_user")[0];
for(var i=0;i<a.length;i++){
	a[i].onclick=function(){
		return false;
	}
}
for(var i=0;i<a.length;i++){
	a[i].addEventListener("click",(function(i){
		return function(event){
			var event=event||window.event;
				if (event.preventDefault) {
					event.preventDefault();
				}else{
					event.returnValue=false;
				}			
		}
	})(i),false);
}
china.addEventListener("mouseenter",function(event){
	addre.style.display="block";
	china.style.background="#fff";
},false);
addre.addEventListener("mouseenter",function(event){
	addre.style.display="block";
	china.style.background="#fff";
},false);
china.addEventListener("mouseleave",function(event){
	addre.style.display="none";
	china.style.background="#f5f5f5";
},false);
addre.addEventListener("mouseleave",function(event){
	addre.style.display="none";
	china.style.background="#f5f5f5";
},false);
mytaobao.addEventListener("mouseenter",function(event){
	list_mytaobao.style.display="block";
	mytaobao.style.background="#fff";
},false);
list_mytaobao.addEventListener("mouseenter",function(event){
	list_mytaobao.style.display="block";
	mytaobao.style.background="#fff";
},false);
mytaobao.addEventListener("mouseleave",function(event){
	list_mytaobao.style.display="none";
	mytaobao.style.background="#f5f5f5";
},false);
list_mytaobao.addEventListener("mouseleave",function(event){
	list_mytaobao.style.display="none";
	mytaobao.style.background="#f5f5f5";
},false);
shoucang.addEventListener("mouseenter",function(event){
	list_shoucang.style.display="block";
	shoucang.style.background="#fff";
},false);
list_shoucang.addEventListener("mouseenter",function(event){
	list_shoucang.style.display="block";
	shoucang.style.background="#fff";
},false);
shoucang.addEventListener("mouseleave",function(event){
	list_shoucang.style.display="none";
	shoucang.style.background="#f5f5f5";
},false);
list_shoucang.addEventListener("mouseleave",function(event){
	list_shoucang.style.display="none";
	shoucang.style.background="#f5f5f5";
},false);
seller.addEventListener("mouseenter",function(event){
	list_seller.style.display="block";
	seller.style.background="#fff";
},false);
list_seller.addEventListener("mouseenter",function(event){
	list_seller.style.display="block";
	seller.style.background="#fff";
},false);
seller.addEventListener("mouseleave",function(event){
	list_seller.style.display="none";
	seller.style.background="#f5f5f5";
},false);
list_seller.addEventListener("mouseleave",function(event){
	list_seller.style.display="none";
	seller.style.background="#f5f5f5";
},false);
customer.addEventListener("mouseenter",function(event){
	list_customer.style.display="block";
	customer.style.background="#fff";
},false);
list_customer.addEventListener("mouseenter",function(event){
	list_customer.style.display="block";
	customer.style.background="#fff";
},false);
customer.addEventListener("mouseleave",function(event){
	list_customer.style.display="none";
	customer.style.background="#f5f5f5";
},false);
list_customer.addEventListener("mouseleave",function(event){
	list_customer.style.display="none";
	customer.style.background="#f5f5f5";
},false);
nav1.addEventListener("mouseenter",function(event){
	listsum.style.display="block";
	nav1.style.background="#fff";
},false);
listsum.addEventListener("mouseenter",function(event){
	listsum.style.display="block";
	nav1.style.background="#fff";
},false);
nav1.addEventListener("mouseleave",function(event){
	listsum.style.display="none";
	nav1.style.background="#f5f5f5";
},false);
listsum.addEventListener("mouseleave",function(event){
	listsum.style.display="none";
	nav1.style.background="#f5f5f5";
},false);
var lock=true;
for(var i=0;i<b.length;i++){
	b[i].addEventListener("click",(function(i){
		return	function(){
			if(lock){
				b[i].style.background="url('images/kuang_shang.png') no-repeat";
				b[i].style.backgroundSize="100% 100%";
				if(i==0){
					dd_ul[i].style.height="108px";
				}else if(i==1){
					dd_ul[i].style.height="54px";
				}else if(i==2){
					dd_ul[i].style.height="81px";
				}	
				lock=false;
			}else{
				b[i].style.background="url('images/kuang_xia.png') no-repeat";
				b[i].style.backgroundSize="100% 100%";
				dd_ul[i].style.height="0px";
				lock=true;
			}
		}
	})(i),false);
}
user_kuang.addEventListener("mouseenter",function(){
	float_user.style.opacity="1";
	float_user.style.top="50px";
	float_user.style.zIndex="1";
},false);
float_user.addEventListener("mouseenter",function(){
	float_user.style.opacity="1";
	float_user.style.top="50px";
	float_user.style.zIndex="1";
},false);
user_kuang.addEventListener("mouseleave",function(){
	float_user.style.opacity="0";
	float_user.style.top="30px";
	float_user.style.zIndex="-1";
},false);
float_user.addEventListener("mouseleave",function(){
	float_user.style.opacity="0";
	float_user.style.top="30px";
	float_user.style.zIndex="-1";
},false);