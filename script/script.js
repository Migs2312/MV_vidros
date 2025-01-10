const result = document.getElementById('result');
const developer = document.getElementById('devName');

var moldura = document.getElementById('refm');
var len = document.getElementById('length');
var hei = document.getElementById('height');
var ho = document.getElementById('hook');
var glass = document.getElementsByName('glass');
var verific = ""

function mold(){
    //Tipo da moldura
        ref=moldura.value;
        moldValue(ref);
        mValue = moldStor[0];
    //Tipo da moldura

    //Tipo do vidro
    glassType=null
    for (var i = 0, leng = glass.length; i < leng; i++) {
        if (glass[i].checked) {
        glassType = glass[i].value
        break;
        }
    }
    //Tipo do vidro


    //Verificação de preenchimento
        if(len.value<=0 || hei.value<=0 || isNaN(len.value)==true || isNaN(hei.value)==true || glassType==null || mValue==0 || ho.value<=0 || isNaN(ho.value)==true){
            if(mValue==0){
                verific = "Selecione uma moldura válida"
            }
            else if(len.value<=0 || isNaN(len.value)==true){
                verific = "Preencha o campo Largura com um número válido"
            }
            else if(hei.value<=0 || isNaN(hei.value)==true){
                verific = "Preencha o campo Altura com um número válido"
            }
            else if(ho.value<=0 || isNaN(ho.value)==true){
                verific = "Preencha o campo Gancho com um número válido"
            }
            else if(glassType==null){
                verific = "Selecione um tipo de vidro"
            }
            result.innerHTML = "<table id='money'><thead><th>Moldura</th><th>Medidas</th><th>Eucatex</th><th>Ganchos</th><th>Vidro</th><th>M. Obra</th><th>Total</th></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td><td></td></td><td></td><td><td></td></td><td></td></tr></tbody></table><br>"+verific
        }
    //Verificação de preenchimento


    else{
        //Matemática

            //Tamanho da moldura
                lengthFix = Number(len.value.replace(",","."));
                round(lengthFix);
                length = rounded;
                heightFix = Number(hei.value.replace(",","."));
                round(heightFix);
                height = rounded;
                perimeter = (((lengthFix.toFixed(2)*2)+(heightFix.toFixed(2)*2))+20)/100;
            //Tamanho da moldura

            //Eucatex
                eucaFix = ((height/100)*(length/100))*50;
                round(eucaFix);
                eucatex = rounded;
            //Eucatex

            //Gancho
                hook = ho.value*5;
            //Gancho

            //Valor do vidro
                if(glassType=="True"){
                    glassName="Normal"
                    glassVal = 80;
                }
                else if(glassType=="False"){
                    glassName="Antireflexo"
                    glassVal = 200;
                }
                else if(glassType=="null"){
                    glassName="Sem vidro"
                    glassVal=0;
                };
                glassValueFix = ((((height/100)*(length/100)))*glassVal);
                round(glassValueFix);
                glassValue = rounded;
            //Valor do vidro

            //Cálculo Final
                totalPrim = ((mValue*(perimeter))+Number(glassValue)+Number(hook)+Number(eucatex));
                mObra = totalPrim*(0.45)

                totalFix = (Number(totalPrim)+Number(mObra));
                round(totalFix);
                total = rounded;
            //Cálculo Final
        //Matemática

        //Conteúdo
                result.innerHTML = "<table id='money'><thead><th>Moldura</th><th>Medidas</th><th>Eucatex</th><th>Ganchos</th><th>Vidro</th><th>M. Obra</th><th>Total</th></thead><tbody><tr><td>"+ref+"</td><td>"+lengthFix+"x"+heightFix+"</td><td>"+length+"x"+height+"</td><td>"+ho.value+"un.</td><td>"+glassName+"</td><td>45%</td></tr><tr><td>R$"+mValue+"</td><td>"+perimeter+"m</td><td>R$"+eucatex+"</td><td>R$"+hook+"</td><td>R$"+glassValue+"</td><td>R$"+mObra.toFixed(2)+"</td><td>R$"+total+"</td></tr></tbody></table>"
        //Conteúdo
    }
};

//Arredondamento
    function round(num){
        rounder = 0
        if(num%5!=0){
            rounder = 5-(num%5)
        };
        rounded=num+rounder
        return(rounded);
    };
//Arredondamento

//Mudança de Imagem
function imageChange(){
    moldValue(moldura.value);
    mType = moldStor[1];
    if(mValid=="valid"){
        document.getElementById('image').style.backgroundImage = "url(./image/mold/"+mType+".jpeg)";
    }
}
setInterval(imageChange, 10);
//Mudança de Imagem

//Armazenamento
function moldValue(mold){
    mValid = "valid";
    moldStor=[]
    switch(mold){
        default:
            mValid = "invalid";
        break;
        case "":
            mVal=0;
            mImg="none";
        break;
        case "004BR":
            mVal=15;
            mImg="04BR_FL";
        break;
        case "014BR":
            mVal=17
            mImg="014BR";
        break;
        case "016BR":
            mVal=27
            mImg="016BR";
        break;
        case "114BR":
            mVal=19
            mImg="114BR";
        break;
        case "115BR":
            mVal=15
            mImg="115BR";
        break;
        case "117BR":
            mVal=15
            mImg="117BR";
        break;
        case "215PBR_FL":
            mVal=20
            mImg="215PBR_FL";
        break;
        case "220BR":
            mVal=45
            mImg="220BR";
        break;
        case "221BR":
            mVal=25
            mImg="221BR";
        break;
        case "305BR_FL":
            mVal=26
            mImg="305BR_FL";
        break;
        case "031-700":
            mVal=35
            mImg="031700";
        break;
        case "031PFB":
            mVal=27
            mImg="031PFB";
        break;
        case "016PPF":
            mVal=21
            mImg="016PPF";
        break;
        case "073PF":
            mVal=26
            mImg="073PF";
        break;
        case "305PF_FL":
            mVal=22
            mImg="305PF_FL";
        break;
        case "198GRAY":
            mVal=24
            mImg="198GRAY";
        break;
        case "003MV_FL":
            mVal=15
            mImg="003MV_FL";
        break;
        case "014-403":
            mVal=17
            mImg="014403";
        break;
        case "221PF":
            mVal=25
            mImg="221PF";
        break;
        case "014PF_FL":
            mVal=17
            mImg="014PF_FL";
        break;
    };
    moldStor.push(mVal);
    moldStor.push(mImg);
    return(moldStor)
};
//Armazenamento

//Desenvolvedor
function dev() {
    developer.classList.add("opacity_change");
    setTimeout(() => {
        developer.style.opacity = "90%";
    }, 80);
};
function offDev(){
            developer.classList.remove("opacity_change");
            developer.style.opacity = "0%";
};
//Desenvolvedor