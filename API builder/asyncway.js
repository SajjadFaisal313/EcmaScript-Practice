const asyncway = () => {
    setTimeout(() => {
    console.log("this is first call");    
    }, 4000);
    
    console.log("this is second call");
};

asyncway();