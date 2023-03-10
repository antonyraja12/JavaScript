function movie1(){    
   let content={
        title:"Baahubali",
        hero:"Prabhas",
        starring:[
           " Rana Daggubati",
           " Anushka Shetty",
            "Tamannaah",
            "Ramya Krishna",
            "Sathyaraj",
            "Nassar"],
        director:"S.S Rajamouli",
        ScreenPlay:["Rajamouli","prasad"],
        music:"MM keraavani",
        Budget	:"₹180 crore ",
        Box_office:"₹650 crore",
        source:"https://moviegalleri.net/wp-content/uploads/2016/09/Baahubali-2-The-Conclusion-Movie-Logo-Wallpaper.jpg"
    }
   document.getElementById("img1").src=content.source;
    var table=(document.getElementById("mtable"));
    var row=table.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    cell1.innerHTML="Title:";
    cell2.innerHTML=content.title;
    row=table.insertRow(1);
    var cell3=row.insertCell(0);
    var cell4=row.insertCell(1);
    cell3.innerHTML="Hero:";
    cell4.innerHTML=content.hero;
    row=table.insertRow(2);
    var cell5=row.insertCell(0);
    var cell6=row.insertCell(1);
    cell5.innerHTML="Starring:";
    cell6.innerHTML=content.starring;
    row=table.insertRow(3);
    var cell7=row.insertCell(0);
    var cell8=row.insertCell(1);
    cell7.innerHTML="Director:";
    cell8.innerHTML=content.director;
    row=table.insertRow(4);
    var cell7=row.insertCell(0);
    var cell8=row.insertCell(1);
    cell7.innerHTML="Screen play:";
    cell8.innerHTML=content.ScreenPlay;
    row=table.insertRow(5);
    var cell7=row.insertCell(0);
    var cell8=row.insertCell(1);
    cell7.innerHTML="Music:";
    cell8.innerHTML=content.music;
    row=table.insertRow(6);
    var cell7=row.insertCell(0);
    var cell8=row.insertCell(1);
    cell7.innerHTML="Budget:";
    cell8.innerHTML=content.Budget;
    row=table.insertRow(7);
    var cell7=row.insertCell(0);
    var cell8=row.insertCell(1);
    cell7.innerHTML="Box office:";
    cell8.innerHTML=content.Box_office;

}  
function movie2(){
    let content={
        title:"Ponniyin selvan",
        Based_on:"Ponniyin selvan by kalki",
        starring:["Vikram",
            "Aishwarya Rai Bachchan",
            "Jayam Ravi",
            "Karthi",
            "Trisha",
            "Jayaram",
            "Aishwarya Lekshmi",
            "Sobhita Dhulipala",
            "Prabhu"],
        director:"Mani Rathnam",
        ScreenPlay:["Mani rathanam","prasad"],
        music:"AR Rahuman",
        Budget	:"250 crore ",
        Box_office:"495-500.6 crore",
        source:"https://upload.wikimedia.org/wikipedia/en/c/c3/Ponniyin_Selvan_I.jpg"
    }
   document.getElementById("img2").src=content.source;
    var table=(document.getElementById("mtable1"));
    var row=table.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    cell1.innerHTML="Title:";
    cell2.innerHTML=content.title;
    row=table.insertRow(1);
    var cell3=row.insertCell(0);
    var cell4=row.insertCell(1);
    cell3.innerHTML="Based on:";
    cell4.innerHTML=content.Based_on;
    row=table.insertRow(2);
    var cell5=row.insertCell(0);
    var cell6=row.insertCell(1);
    cell5.innerHTML="Starring:";
    cell6.innerHTML=content.starring;
    row=table.insertRow(3);
    var cell7=row.insertCell(0);
    var cell8=row.insertCell(1);
    cell7.innerHTML="Director:";
    cell8.innerHTML=content.director;
    row=table.insertRow(4);
    var cell7=row.insertCell(0);
    var cell8=row.insertCell(1);
    cell7.innerHTML="Screen play:";
    cell8.innerHTML=content.ScreenPlay;
    row=table.insertRow(5);
    var cell7=row.insertCell(0);
    var cell8=row.insertCell(1);
    cell7.innerHTML="Music:";
    cell8.innerHTML=content.music;
    row=table.insertRow(6);
    var cell7=row.insertCell(0);
    var cell8=row.insertCell(1);
    cell7.innerHTML="Budget:";
    cell8.innerHTML=content.Budget;
    row=table.insertRow(7);
    var cell7=row.insertCell(0);
    var cell8=row.insertCell(1);
    cell7.innerHTML="Box office:";
    cell8.innerHTML=content.Box_office;
}

