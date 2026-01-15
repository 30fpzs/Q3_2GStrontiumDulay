function confirmSub()
{
    return confirm("Are you sure you want to submit the form?")
}

function confirmRes()
{
    return confirm("Are you sure you want to reset the form?")
}

function checkVal(input)
{
    if(input.value.trim() === "")
    {
        input.style.border = "4px solid red";
    }
    
    else
    {
        input.style.border = "";
    }
}