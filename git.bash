echo 'enter message for commit:'
read msg

var=`git add . && git commit -m "$msg" && git push origin master`
echo $var