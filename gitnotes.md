 Git & gitHub

Git:

Git is versioning system, it helps when we are colloboration  with dev/qa in code for the project
we can also see the changes track.

Github:
Github cloud based platform for hosting git repositories



                    GitHub
        |             |                  |
        gituser      gitUser2          GitUser3



        working directory - Staging area - git repository. --> server rmeote file


        Git

        Init - untracked file
        commit - tracked file
        push - remote file (github)


Steps:

 -  Initilaize
 -  Configure user information
 -   commit locally
 - link to the remote repository
 - push
 - pull


 Instllation:

 https://git-scm.com/install/windows

for checking the installation in cmd prompt
 git --version

git init
git config --global user.name "name"
git config --global user.email "email"

git add -A (adding all files)
git add filename ( adding specific filename)
git add folderName ( adding specific folderName)

git commit - m "commit message"

git remote add origin " github url"

git push origin master

git pull origin master

rm -rf