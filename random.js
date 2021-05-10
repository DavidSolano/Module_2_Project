const NUM_BONES = 5;
let squareCounter = 1;
let boneCounter = 0;
let addToMeter = 0;

$(document).ready(function (){

    for (let i = 0; i < NUM_BONES; i++)
    {
        for (let j = 0; j < NUM_BONES; j++)
        {
            //make spans
            let theSpan = $("<span>");

            //add spans to page
            $("div#grid").append(theSpan);

            //give it color
            theSpan.css("background-color", "#008000");

            theSpan.attr("id", squareCounter)

            theSpan.addClass("grass");

            squareCounter++;

            let pain = Math.floor(Math.random() * 25) + 1

            if(12.5 > pain && boneCounter < NUM_BONES)
            {
                theSpan.addClass('bone')
                boneCounter++
            }
            else
            {
                theSpan.addClass('noBone')
            }
        }
        $("div#grid").append("<br>");
    }
    $("span.grass").one("click", digLawn)
});

function digLawn ()
{
    //check which span was clicked
    let clickedSpan = $(this);

    let k = (Math.random() * (1/Math.pow(5, 2)) + (4/Math.pow(5, 2)) * 100)

    addToMeter += k

    $("p").text(`The number of bones left is: ${boneCounter}`)

    $("p#output").text(`shoo, you- you get outta me lawn`).hide()
    $("p#output").text(`good job you did it, you found all the bones`).hide()

    if(clickedSpan.hasClass('bone'))
    {
        //remove the class and add a dug one
        clickedSpan.replaceWith("<div class='dug content'>");
        //add to meter
        $("#status").val(addToMeter)

        boneCounter--

        if($("#status").val() >= 100)
        {
            addToMeter = 100

            if(addToMeter === 100 && boneCounter === 0){
                $("p#output").text(`good job you did it, you found all the bones`).show()
                clickedSpan.off(digLawn())
                boneCounter.off()
            }
            else if (addToMeter === 100 && boneCounter > 0){
                $("p#output").text(`shoo, you- you get outta me lawn`).show()
                clickedSpan.off(digLawn())
                boneCounter.off()
            }

        }
    }
    else if ($("#status").val() >= 100)
    {
        clickedSpan.replaceWith("<div class='noMore19DollarFortniteCard'>")

        clickedSpan.off(digLawn())
    }
    else
    {
        clickedSpan.replaceWith("<div class='dug'>")
        //add to meter
        $("#status").val(addToMeter)

        if($("#status").val() >= 100)
        {
            addToMeter = 100

            if(addToMeter === 100 && boneCounter === 0){
                $("p#output").text(`good job you did it, you found all the bones`).show()

                clickedSpan.replaceWith("<div class='noMore19DollarFortniteCard'>")
            }
            else if (addToMeter === 100 && boneCounter > 0){
                $("p#output").text(`shoo, you- you get outta me lawn`).show()
                clickedSpan.replaceWith("<div class='noMore19DollarFortniteCard'>")
            }

        }
    }




}
