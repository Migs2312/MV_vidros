const result = document.getElementById('result');
const developer = document.getElementById('devName');

var moldura = document.getElementById('refm');
var len = document.getElementById('length');
var hei = document.getElementById('height');
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
    for (var i = 0, length = glass.length; i < length; i++) {
        if (glass[i].checked) {
        glassType = glass[i].value
        break;
        }
    }
    //Tipo do vidro


    //Verificação de preenchimento
        if(len.value<=0 || hei.value<=0 || glassType==null || mValue==0){
            if(mValue==0){
                verific = "Selecione uma moldura válida"
            }
            else if(len.value<=0){
                verific = "Preencha o campo Largura com um número válido"
            }
            else if(hei.value<=0){
                verific = "Preencha o campo Altura com um número válido"
            }
            else if(glassType==null){
                verific = "Selecione um tipo de vidro"
            }
            result.innerHTML = "<table id='money'><thead><th>Moldura</th><th>Medidas</th><th>Vidro</th><th>M. Obra</th><th>Total</th></thead><tbody><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td><td></td></td><td></td></tr></tbody></table><br>"+verific
        }
    //Verificação de preenchimento


    else{
        //Matemática

            //Tamanho da moldura
                lengthRound=0;
                heightRound=0;
                lengthFix = Number(len.value.replace(",","."));
                if(lengthFix%5!=0){
                    lengthRound = 5-(lengthFix%5)
                }
                heightFix = Number(hei.value.replace(",","."));
                if(heightFix%5!=0){
                    heightRound = 5-(heightFix%5)
                }
                length = Number(lengthFix)+Number(lengthRound);
                height = Number(heightFix)+Number(heightRound);
                perimeter = (((length*2)+(height*2)).toFixed(2))/100;
            //Tamanho da moldura

            //Valor do vidro
                glassRound = 0
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
                glassValueFix = (((height*length)/10000)*glassVal).toFixed(2);
                if(glassValueFix%5!=0){
                    glassRound = 5-(glassValueFix%5)
                }
                glassValue = Number(glassValueFix)+Number(glassRound)
            //Valor do vidro

            //Cálculo Final
                totalRound = 0
                totalPrim = ((mValue*(perimeter))+Number(glassValue)).toFixed(2);
                mObra = totalPrim*(0.45)
                totalFix = (Number(totalPrim)+Number(mObra)).toFixed(2);
                if(totalFix%5!=0){
                    totalRound = 5-(totalFix%5)
                }
                total = Number(totalFix)+Number(totalRound);
            //Cálculo Final
        //Matemática

        //Conteúdo
                result.innerHTML = "<table id='money'><thead><th>Moldura</th><th>Medidas</th><th>Vidro</th><th>M. Obra</th><th>Total</th></thead><tbody><tr><td>"+ref+"</td><td>"+length+"x"+height+"</td><td>"+glassName+"</td><td>45%</td></tr><tr><td>R$"+mValue+"</td><td>"+perimeter+"m</td><td>R$"+glassValue+"</td><td>R$"+mObra.toFixed(2)+"</td><td>R$"+total+"</td></tr></tbody></table>"
        //Conteúdo
    }
};

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
        case "04BR_FL":
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