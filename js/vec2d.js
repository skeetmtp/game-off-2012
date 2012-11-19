// Misc
function NormVec2D(a,b) {
    var args = NormVec2D.caller.arguments;
    var len = args.length;
    if(len==1)
    {
        var vec = {x:a.x, y:a.y};
        var l = Math.sqrt(vec.x * vec.x + vec.y * vec.y);
        return l;
    }
    else
    {
        var l = Math.sqrt(a * a + b * b);
        return l;
    }
}

function NormalizeVec2D(arg) {
    var vec = {x:arg.x, y:arg.y};
    var l = NormVec2D(vec);
    if(l>0.0001)
    {
        vec.x = vec.x / l;
        vec.y = vec.y / l;
    }
    else
    {
        vec.x = 1;
        vec.y = 0;
    }
    return vec;
}

function MulVec2D(arg, coef) {
    var vec = {x:arg.x, y:arg.y};
    vec.x *= coef;
    vec.y *= coef;
    return vec;
}