@echo off
REM Compile all Java files from java folder to classes folder
javac -d classes java/*.java
echo Compilation complete! Class files stored in 'classes' folder.
