/*

// For loop Paractice

// A shape pattern



for(let i=1; i<=7; i++)
{
    let row ="";
    for(let j=1; j<=7; j++)
    {
        if( i==1 || j==1 || i==4 || j==7)
        {
            row += "a"
        }
        else
        {
            row += " "
        }
    }
    //console.log(row);
}


// B shape pattern

for(let i=1; i<=7; i++)
{
    let value="";
    for(let j=1; j<=7; j++)
    {
        if(i==1 || i==4 || i==7 || j==1 || j==7)
        {
            value += "*"
        }
        else {
            value += " "
        }
        
    }
    //console.log(value);
}


// C shape pattern

for(let i=1; i<=7; i++)
{
    let c="";
    for(let j=1; j<=5; j++)
    {
        if(i==1 || j==1 || i==7)
        {
            c += "*"
        }
        else {
            c += " "
        }
    }
    //console.log(c);
}


// D Shape pattern

for(let i=1; i<=7; i++)
{
    let d=""
    for(let j=1; j<=5; j++)
    {
        if(i==1 || i==7 || j==2 || j==5)
        {
            d += "*"
        }
        else{
            d += " "
        }
    }
    //console.log(d);
}


// E shape pattern

for(let i=1; i<=7; i++)
{
    let e="";
    for(let j=1; j<=5; j++)
    {
        if(i==1 || i==4 || i==7 || j==1)
        {
            e += "*"
        }
        else{
            e += " "
        }
    }
    //console.log(e);
}


// F shape pattern

for(let i=1; i<=7; i++)
{
    let f="";
    for(let j=1; j<=5; j++)
    {
        if(i==1 || i==4 || j==1)
        {
            f += "*"
        }
        else{
            f +=" "
        }
    }
    //console.log(f);
}

// G shape pattern

for(let i=1; i<=7; i++)
{
    let g="";
    for(let j=1; j<=5; j++)
    {
        if(i==1 || j==1 || i==7 || (j==5 && i>=5) || (j==3 && i==5) || (j==4 && i==5))
        {
            g +="*"
        }
        else {
            g += " "
        }
    }
    //console.log(g);
}


// H shape pattern

for(let i=1; i<=7; i++)
{
    let h=""
    for(let j=1; j<=5; j++)
    {
        if (i==4 || j==1 || j==5)
        {
            h +="*"
        }
        else{
            h +=" "
        }
    }
    //console.log(h);
}

// I shape pattern

for(let i=1; i<=7; i++)
{
    let _i=""
    for(let j=1; j<=7; j++)
    {
        if(i==1 || j==4 || i==7)
    {
        _i += "*"
    }
    else{
        _i += " "
    }
    }
    //console.log(_i);
}

// J Shape pattern

for(let i=1; i<=7; i++)
{
    let row="";
    for(let j=1; j<=7; j++)
    {
        if(i==1 || j==4 || (i>=5 && j==1) || (i==7 && j<=4))
        {
            row +="*"
        }
        else{
            row += " "
        }
    }
    //console.log(row);
}

// K shape pattern

for(let i=1; i<=7; i++)
{
    let k=""
    for(let j=1; j<=5; j++)
    {
        if(j==1 || (i==4 && j==2) || (i==3 && j==3) || (i==2 && j==4) || (i==1 && j==5) || 
        (i==5 && j==3) || (i==6 && j==4) || (i==7 && j==5))
        {
            k+="*"
        }
        else{
            k+=" "
        }
    }
    //console.log(k);
}


// L shape pattern

for(let i=1; i<=7; i++)
{
    let l=""
    for(let j=1; j<=7; j++)
    {
        if(i==7 || j==1)
        {
            l+="*"
        }
        else{
            l+=" "
        }
    }
    //console.log(l);
}

// M shape Pattern

for(let i=1; i<=7; i++)
{
    let m=""
    for(let j=1; j<=7; j++)
    {
        if(j==1 || j==7 || (i==2 && j==2) || (i==3 && j==3) || (i==4 && j==4) || (i==3 && j==5) ||
        (i==2 && j==6) || (i==1 && j==7))
        {
            m+="*"
        }
        else{
            m+=" "
        }
    }
    //console.log(m);
}

// N shape pattern

for(let i=1; i<=7; i++)
{
    let n=""
    for(let j=1; j<=7; j++)
    {
        if(j==1 || j==7 || (i==2 && j==2) || (i==3 && j==3) || (i==4 && j==4) || (i==5 && j==5) ||
        (i==6 && j==6) || (i==7 && j==7))
        {
            n+="*"
        }
        else {
            n+=" "
        }
    }
    //console.log(n);
}

// O shape pattern

for(let i=1; i<=7; i++)
{
    let o="";
    for(let j=1; j<=6; j++)
    {   
        if(j==1 || j==6 ||(i==1 && j==2) || (i==1 && j==3) || (i==1 && j==4) || (i==1 && j==5) ||
        (i==7 && j==2) || (i==7 && j==3) || (i==7 && j==4) || (i==7 && j==5))
        {
            o+= "*"
        }
        else {
            o+=" "
        }
    }
    //console.log(o);
}


// P shape pattern


for(let i=1; i<=7; i++)
{
    let p=""
    for(let j=1; j<=7; j++)
    {
        if(i==1 || i==4 || j==1 ||(j==7 && i<=4))
        {
            p+="*"
        }
        else
        {
            p+=" "
        }
    }
    //console.log(p);
}

// Q Shape Pattern

for(let i=1; i<=7; i++)
{
    let q=""
    for(let j=1; j<=7; j++)
    {
        if(i==1 || i==7 || j==1 || j==7 || (i==6 && j==6) || (i==5 && j==5) || (i==4 && j==4))
        {
            q+="*"
        }
        else
        {
            q+=" "
        }
    }
    //console.log(q);
}

// R shape pattern

for(let i=1; i<=7; i++)
{
    let r="";
    for(let j=1; j<=7; j++)
    {
        if(i==1 || i==4 || j==1 || (j==7 && i<=4) || (i==5 && j==3) || (i==6 && j==4) || (i==7 && j==5))
        {
            r+="*"
        }
        else{
            r+=" "
        }
    }
    //console.log(r);
}


// S shape pattern

for(let i=1; i<=9; i++)
{
    let s="";
    for(let j=1; j<=7; j++)
    {
        if(i==1 || i==5 || i==9 || (j==1 && i<=5) || (j==7 && i>=5))
        {
            s+="*"
        }
        else{
            s+=" "
        }
    }
    //console.log(s);
}

// T Shape pattern

for(let i=1; i<=7; i++)
{
    let t="";
    for(let j=1; j<=7; j++)
    {
        if(i==1 || j==4)
        {
            t+="*"
        }
        else{
            t+=" "
        }
    }
    //console.log(t);
}


// U shape pattern

for(let i=1; i<=7; i++)
{
    let u="";
    for(let j=1; j<=7; j++)
    {
        if(j==1 || i==7 || j==7)
        {
            u+="*"
        }
        else{
            u+=" "
        }
    }
    //console.log(u);
}

// V shape pattern

for(let i=1; i<=5; i++)
{
    let v="";
    for(let j=1; j<=9; j++)
    {
        if((i==1 && j==1) || (i==2 && j==2) || (i==3 && j==3) || (i==4 && j==4) || (i==5 && j==5) ||
        (i==5 && j==5) || (i==4 && j==6) || (i==3 && j==7) || (i==2 && j==8) || (i==1 && j==9))
        {
            v+="*"
        }
        else{
            v+=" "
        }
    }
    //console.log(v);
}

// W shape pattern

for(let i=1; i<=6; i++)
{
    let w="";
    for(let j=1; j<=17; j++)
    {
        if((i==1 && j==1) || (i==2 && j==2) || (i==3 && j==3) || (i==4 && j==4) || (i==5 && j==5) ||
        (i==5 && j==5) || (i==6 && j==6) || (i==5 && j==7) || (i==4 && j==8) || (i==3 && j==9) ||
        (i==4 && j==10) || (i==5 && j==11) || (i==6 && j==12) || (i==5 && j==13) || (i==4 && j==14) ||
        (i==3 && j==15) || (i==2 && j==16) || (i==1 && j==17))
        {
            w+="*"
        }
        else{
            w+=" "
        }
    }
    //console.log(w);
}

// X shape pattern

for(let i=1; i<=7; i++)
{
    let x="";
    for(let j=1; j<=7; j++)
    {
        if((i==1 && j==1) || (i==2 && j==2) || (i==3 && j==3) || (i==4 && j==4) || (i==5 && j==5) || (i==6 && j==6) ||
        (i==7 && j==7) || (i==7 && j==1) || (i==6 && j==2) || (i==5 && j==3) || (i==3 && j==5) || (i==2 && j==6) || (i==1 && j==7))
        {
            x+="*"
        }
        else {
            x+=" "
        }
    }
    //console.log(x);
}

// Y Shape Pattern

'''
for(let i=1; i<=7; i++)
{
    let y="";
    for(let j=1; j<=7; j++)
    {
        if((i==1 && j==1) || (i==2 && j==2) || (i==3 && j==3) || (i==4 && j==4) || (i==3 && j==5) || (i==2 && j==6) || (i==1 && j==7)
        || (i==5 && j==4) || (i==6 && j==4) || (i==7 && j==4))
        {
            y+="*"
        }
        else {
            y+=" "
        }
    }
    //console.log(y);
}

// Z shape Pattern

for(let i=1; i<=7; i++)
{
    let z="";
    for(let j=1; j<=7; j++)
    {
        if(i==1 || i==7 || (i==2 && j==6) || (i==3 && j==5) || (i==4 && j==4) || (i==5 && j==3) || (i==6 && j==2)
        || (i==7 && j==1))
        {
            z+="*"
        }
        else {
            z+=" "
        }
    }
    console.log(z);
}



for(let i=1; i<=7; i++)
{
    let a = ''
    for(let j=1; j<=6; j++)
    {
        if(i==1 || i==4 || j==1 || j==6)
        {
            a+='*'
        }
        else
        {
            a+=' '
        }
    } 
    console.log(a);
}



let r = 5;
for(let i = 1; i <= r; i++)
{
    //let a='';
    for(let j=1; j <= i; j++)
    {
        a += j;
    }
    console.log(a);
}



function pattern(r) {
    for(let i=1; i<=r; i++)
    {
        let a = '';
        for(let j=1; j<=i; j++)
        {
            a += j;
        }
        console.log(a);
    }
}
pattern(5)

*/



for (let i = 1; i <= 5; i++) {
    let pattern = '';
    if (i % 2 === 0)
    {
        for (let j = i; j >= 1; j--) 
        {
            pattern += j;
        }
    }
    else 
    {
        for (let j = 1; j <= i; j++)
        {
            pattern += j;
        }
    }
    console.log(pattern);
}