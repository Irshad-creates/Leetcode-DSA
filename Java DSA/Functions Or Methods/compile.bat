@echo off
REM Compile all Java files from java folder to classes folder
javac -d classes java/*.java
echo Compilation complete! Class files stored in 'classes' folder.

@REM cd ".\Java DSA\Functions Or Methods"
@REM .\compile.bat



@REM Step 2: Run the compiled class

@REM java -cp classes [filename]