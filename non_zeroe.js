function non_zeroe(tab){     
 var deb = 0;                
 var nbre = 0
 var end = tab.length - 1;   
 while( deb < end){           
   if(tab[deb] == 0){           
      if(tab[end]!= 0){
         tab[deb] = tab[end];      
         tab[end] = 0;                 
         deb++;
         end--;
       }
       else
        end--;
    }
    else{ 
     deb++;
    }
  }// end while
 console.log("pos deb :" + deb);
 console.log(tab);
 return deb;                   
} // end function
var tab = [0,0,0,5,6,0,7,8,0,0,9];
var test = [0,0,1];
var ex = [1,0,0,0,5,0,0];
var app = [0,0,4,5,0,0,0,8,9,0,0];
non_zeroe(tab);
non_zeroe(test);
non_zeroe(ex);
non_zeroe(app);
