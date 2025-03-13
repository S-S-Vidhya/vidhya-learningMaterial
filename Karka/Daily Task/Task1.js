function isPalindrome(str)
{
let j = str.length-1
for(i=0;i<str.length;i++)
{
    if(str[i]==str[j])
    {
        return true
    }
    j--
}
    return false

}
console.log(isPalindrome("madam"))