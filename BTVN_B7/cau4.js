function cau4(string){
  let all_chars = string.split("");
  for(let i = 0; i < all_chars.length; i++) {
    let n = all_chars[i].charCodeAt() - 'a'.charCodeAt(); 
    // n = 0-25
    n = (n + 1) % 26; 
    all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return all_chars.join("");
}
console.log(cau4("vothikhanhly"));
