const removeAll$$ = document.querySelectorAll(".fn-remove-me");

for (let index = 0; index < removeAll$$.length; index++) {
    const remove$$  = removeAll$$[index];
    remove$$.remove();
}
