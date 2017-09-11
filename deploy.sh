zip_file="t1.zip"

if [[ -f $zip_file ]]; then rm $zip_file; fi
if [[ -d "t1" ]]; then rm -rf t1; fi

zip -9 -r --exclude=*node_modules/* --exclude=server.txt $zip_file .

scp $zip_file arqui:~
ssh arqui '''
  echo 'A' | unzip t1.zip -d t1
  cd t1
  yarn
  pm2 restart index
'''
