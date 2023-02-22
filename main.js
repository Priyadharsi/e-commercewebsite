
	    var obj=[
             {
		 	     id:1,
                 image:"hummingbird-cushion.jpg",
                 Design:"Graphic Corner",
                 furnituretype:"Bobber Small Pendant Light",
                 amount:129
             },
		 	{
		 	     id:2,
                 image:"mug-today-is-a-good-day.jpg",
                 Design:"Studio Design",
                 furnituretype:"Bobber Table Lamp",
                 amount:110
             },
             {
		 	     id:3,
                 image:"brown-bear-printed-sweater.jpg",
                 Design:"Graphic Corner",
                 furnituretype:"Cast Scone Wall Lamp",
                 amount:311
             },
             {
		 	     id:4,
                 image:"hummingbird-printed-t-shirt.jpg",
                 Design:"Graphic Corner",
                 furnituretype:"Franklin Chandelier",
                 amount:412
             },
             {
		 	     id:5,
                 image:"the-adventure-begins-framed-poster.jpg",
                 Design:"Graphic Corner",
                 furnituretype:"Afternoon Dining Chair",
                 amount:513
             },
             {
		 	    id:6,
                 image:"mountain-fox-cushion.jpg",
                 Design:"Studio Design",
                 furnituretype:"Bollard Lamp",
                 amount:856
             },
         {
		 	     id:7,
                 image:"mountain-fox-notebook.jpg",
                 Design:"Graphic Corner",
                 furnituretype:"Clean Cut Dining Chair",
                 amount:656
             },
             {
		 	     id:8,
                 image:"brown-bear-vector-graphics.jpg",
                 Design:"Graphic Corner",
                 furnituretype:"Circula Coffee Table",
                 amount:756
             }
			
		 ];
	     let furnitures = document.getElementById("furniture");
		
		 function showdata(data){
		
		   data.forEach(function(elm,i,arr){
		    let colelm = document.createElement("div");
		    let furnitureimg = document.createElement("div");
		    let furimage = document.createElement("img");
		    let furnitureratings = document.createElement("div");
		    let txtelm = document.createElement("h6");
		    let textelm = document.createElement("h5");
		    let paraelm = document.createElement("p");
            
		   
		    colelm.setAttribute("class","col-lg-3");
		    furnitureimg.setAttribute("class","furniture-img");
		    furimage.setAttribute("src","image/"+elm.image);
		    furnitureratings.setAttribute("class","furniturerating");
            
            txtelm.style.color="#767676";
            txtelm.style.marginTop="20px";
		   
		    txtelm.innerText=elm.Design;
		    textelm.innerText=elm.furnituretype;
		    paraelm.innerText=elm.amount;
		   
		   
		    furnitures.appendChild(colelm);
		    colelm.append(furnitureimg,furnitureratings);
		    furnitureratings.append(txtelm,textelm,paraelm);
		    furnitureimg.appendChild(furimage);
           
		   
         });
		
         }
		 showdata(obj);


