let fundData=document.getElementById('fund-data'),
    tabList=fundData.getElementsByTagName('li'),
    divList=document.getElementsByClassName('fund-data-select');


function changeTab(curIndex){
    for (let i = 0; i <tabList.length ; i++) {
        tabList[i].className = '';
        divList[i].style.display='none';
    }
    tabList[curIndex].className+=' active';
    divList[curIndex].style.display='block';
}

for (let  i = 0; i <tabList.length ; i++) {
    tabList[i].onclick=function(){
        changeTab(i);
    }
}



