var points;
var img;
var lastTouched;
var circle;
var img_url = "https://drive.google.com/uc?id=";

function setup(){
    points = [
        [55, 385, 60, "mojo"],
        [65.5, 309, 60, "sewing"],
        [181, 216, 60, "ultimakers"],
        [133,386, 80, "dl"],
        [207, 421, 60, "vr"],
        [62, 180, 60, "vinyl"],
        [300, 238, 60, "waterjet"],
        [280, 113, 60, "objet"],
        [307, 44, 60, "objet"],
        [436, 57, 60, "epilog"],
        [460, 202, 60, "fusion"],
        [542, 79, 60, "universal"],
        [585, 35, 60, "othermill"],
        [479, 107, 60, "formlabs"],
        [398, 108, 60, "shop1"],
        [688, 219, 60, "shop2"],
        [626, 247, 60, "tormach"],
        [350, 164, 60 ,"fortis"],
        [436, 291, 60, "cairn"]

    ];

    var cnv = createCanvas(800,520);
    var cnv = document.getElementById("can");
    cnv.appendChild(document.getElementById("defaultCanvas0"))

    img = loadImage("map.png"); 
    console.log("hi");
}



function draw(){

    background(255);
    image(img, 0, 0, 800, 520);
    checkHover();
}

function mousePressed(){
    //alert(mouseX+", "+ mouseY);
    if(circle)
        changeInfo(points[lastTouched][3]);
}

function checkHover(){
    // if(dist(mouseX,mouseY, 47, 82) < 50){
    //  stroke(100,100,100,120);
    //  strokeWeight(10);
    //  noFill();
    //  ellipse(47,82,85,85);
    // }    
    // else if(dist(mouseX,mouseY, 167, 82) < 30){

    // }
    circle = false;
    for(var  i = 0; i<points.length; i++){
        
        if(dist(mouseX,mouseY, points[i][0], points[i][1]) < (points[i][2]) - 30){
            starting = false;
            stroke(100,100,100,120);
            strokeWeight(5);
            fill(50,50);
            ellipse(points[i][0], points[i][1],points[i][2]+37, points[i][2]+37);
            cursor(HAND);
            //this.style.cursor = "hand";
            lastTouched = i;
            circle = true;
            // snakeX = points[i][0];
            // snakeY = points[i][1];
            //break;
            // if(mouseIsPressed){
            //  changeInfo(points[i][3]);
            // }
        }
        if(!circle)
            cursor(ARROW);
        //  if(!starting)
        //      ellipse(points[lastTouched][0], points[lastTouched][1],points[lastTouched][2]+37, points[lastTouched][2]+37);
        
    }
}

function changeInfo(item){
    console.log(item);
    if(item == "mojo"){
        $('#img').attr('src',img_url+'1IoHM5wmapo6GqLfb-L6tmJkycsU1f2hg');
        $("#item_name").html("Mojo Printers");
        $("#description").html("<br> The Mojo from Stratasys straddles the line between being a consumer and professional grade 3D printer. Its compact size makes it optimal for desktop use. ");
        $("#read_more").attr("href","http://makerspace.engineering.nyu.edu/machines/stratasys-printers/");
    }

    else if(item == "sewing"){
        $('#img').attr('src',img_url+'1RQGPR_PbAHxxOrMo2iYIHl0G06WSQBIN');
        $("#item_name").html("Sewing Machine");
        $("#description").html("<br>A heavy duty metal frame and powerful motor make this machine a true workhorse. Free Owner's Class videos and lessons via Singer App.");
        $("#read_more").attr("href","https://www.singer.com/heavy-duty-4452-sewing-machine?gclid=Cj0KCQjw7sDlBRC9ARIsAD-pDFrDRTMl2PU2yb-oBftQj_SR8ewAToGD23ly88Axng41SlcwQNo149AaAl0lEALw_wcB");
    }

    else if(item == "ultimakers"){
        $('#img').attr('src',img_url+'1ypGangrzVSYWcAQddO0x5fKuJ0uBcNcz');
        $("#item_name").html("Ultimaker");
        $("#description").html("<br>Ultimaker is a 3D printer manufacturing company based in the Netherlands, with offices and assembly line in the US. They make FFF 3D printers, develop 3D printing software, and sell branded 3D printing materials.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/ultimaker/')
    }

    else if(item == "dl"){
        $('#img').attr('src',img_url+'1cDyEdVtPRgyhUp81ijj5cz2yo1LuPuqu');
        $("#item_name").html("The Design Lab");
        $("#description").html("<br>The Design Lab is The MakerSpace programming arm. It provides NYU students with opportunities to ideate, experiment, prototype, and build their ideas. It cultivates collaboration, nurtures students' creative confidence and connects them with other parts of the NYU Innovation and Entrepreneurship ecosystem.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/designlab/')
    }

    else if(item == "vr"){
        $('#img').attr('src',img_url+'1f_llPg-a33FtvT6EN9vdgKHCXiPdfeSv');
        $("#item_name").html("VR Area");
        $("#description").html("<br>The MakerSpace has an HTC vive headset that students can use for their project work.");
        $("#read_more").attr('href','https://www.vive.com/us/')
    }

    else if(item == "vinyl"){
        $('#img').attr('src',img_url+'1f_llPg-a33FtvT6EN9vdgKHCXiPdfeSv');
        $("#item_name").html("Vinyl Cutter");
        $("#description").html("<br>Roland CAMM-1 is our standard vinyl cutter. It uses a tiny drag knife to cut stickers and decals.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/vinyl-cutter')
    }

    else if(item == "waterjet"){
        $('#img').attr('src',img_url+'1f_llPg-a33FtvT6EN9vdgKHCXiPdfeSv');
        $("#item_name").html("Water Jet");
        $("#description").html("<br>The WARDJet E-0606 is a CNC waterjet cutter capable of cutting precise lines in materials up to several inches in thickness. The waterjet is operated by MakerSpace staff, so training is not required.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/waterjet-cutter/')
    }

    else if(item == "elite"){
        $('#img').attr('src',img_url+'1SY5x2tJrR3d3xU-RdX8mcrys3fjKhGGx');
        $("#item_name").html("The Elite");
        $("#description").html("<br>Dimension Elite is an industrial grade 3D Printer by Stratasys. They make use of Stratasys' proprietary ABSplus™ modeling material, a productiongrade thermoplastic that is durable enough to perform virtually the same as production parts.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/stratasys-printers')
    }

    else if(item == "objet"){
        $('#img').attr('src',img_url+'1c3QmsEYrD9eH_oFwvZE2X2I55ledpMH7');
        $("#item_name").html("The Objet");
        $("#description").html("<br>The Stratasys Objet 30 is our advanced Polyjet 3D printer. Similar to an inkjet printer, the print head jets microscopic layers of liquid photopolymer onto a build tray and instantly cures them with UV light.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/objet-30/')
    }

    else if(item == "epilog"){
        $('#img').attr('src',img_url+'1Iw0Pn1FXLwcXS2cENi-zEqGb0SFqTxhA');
        $("#item_name").html("The Epilog Mini");
        $("#description").html("<br>The Epilog Mini 24 and Epilog Fusion M2 32 are our standard laser cutters.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/epilog-laser-cutters/')
    }

    else if(item == "fusion"){
        $('#img').attr('src',img_url+'1yxgXDNuPGbrtFyCg_Qx6Xd2XG5DvBrwg');
        $("#item_name").html("The Epilog Fusion");
        $("#description").html("<br>The Epilog Mini 24 and Epilog Fusion M2 32 are our standard laser cutters.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/epilog-laser-cutters/')
    }

    else if(item == "universal"){
        $("#item_name").html("The Universal Laser");
        $("#description").html("<br>The Universal ILS12.75 is our large format laser cutter. The laser works through a print driver, so files can be designed in many different softwares.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/universal-laser/')
    }

    else if(item == "othermill"){
        $('#img').attr('src',img_url+'1f_llPg-a33FtvT6EN9vdgKHCXiPdfeSv');
        $("#item_name").html("The Othermill");
        $("#description").html("<br>The Othermill is our desktop CNC mill, used to prototype PCBs and cut 2D or 3D shapes out of various materials.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/othermill/')
    }

    else if(item == "formlabs"){
        $('#img').attr('src',img_url+'16s9BWvmvsoc8vjiQKBEvPFu1VsZdtTiL');
        $("#item_name").html("The Form 2");
        $("#description").html("<br>The Form 2 is our standard SLA 3D printer. It uses a laser to cure liquid resin, for high resolution 3D printing.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/form-2/')
    }

    else if(item == "shop1"){
        $('#img').attr('src',img_url+'126gi1BrGtdfyiUbBHy3BBIoLJ-_Y32Uk');
        $("#item_name").html("The ShopBot");
        $("#description").html("<br>The ShopBots are our standard CNC Routers, used to cut 2.5D or 3D shapes out of wood or plastics. It is recommended that you learn and get comfortable using the Othermill before using the ShopBot.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/shopbot/')
    }

    else if(item == "shop2"){
        $('#img').attr('src',img_url+'1Y3NJFxuou0u4l6sHZ6NI474CjMYkitrH');
        $("#item_name").html("The ShopBot");
        $("#description").html("<br>The ShopBots are our standard CNC Routers, used to cut 2.5D or 3D shapes out of wood or plastics. It is recommended that you learn and get comfortable using the Othermill before using the ShopBot.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/shopbot/')
    }

    else if(item == "tormach"){
        $('#img').attr('src',img_url+'1uNZFWqiwhz2o_im6DhN9vwY0dbXxAF7o');
        $("#item_name").html("The Tormach");
        $("#description").html("<br>The Tormach PCNC440 is our CNC Mill for student use, used to cut 2.5D or 3D shapes out of metals. MakerSpace Safety Orientation and specialized training (by appointment) are required to use this machine.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/tormach-pcnc440/')
    }

    else if(item == "fortis"){
        $('#img').attr('src',img_url+'1nzmOR0lrEc_TMns3wLSgfne4u91K6bJj');
        $("#item_name").html("The Tormach");
        $("#description").html("<br>The Mojos, Elites, and Fortus are our commercial-grade 3D printers. Each uses a dual print head to print durable model material and soluble support material, and single-use build trays for reliable prints.");
        $("#read_more").attr('href','http://makerspace.engineering.nyu.edu/machines/stratasys-printers/')
    }

    else if(item == "cairn"){
        $('#img').attr('src',img_url+'1yAzqKqK1_ttocF43TaRXS3gYNuwTSnhl');
        $("#item_name").html("Cairn");
        $("#description").html("<br>A board game like table, on which visitors create their own Cairn based on what they are doing at the MakerSpace and how much time they spend in the space.");
        $("#read_more").attr('href','https://medium.com/@kush.srishti/cairn-developing-a-tangible-data-visualization-tool-1ca118f0db84')
    }
}







