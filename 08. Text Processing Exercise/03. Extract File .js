function solve(string) {
    let lastIdxOfSlash = string.lastIndexOf('\\');
    let lastNameIdx = string.lastIndexOf('.');

    let fileName = string.substring(lastIdxOfSlash + 1, lastNameIdx);
    let extension = string.substring(lastNameIdx + 1);

    console.log(`File name: ${fileName}\nFile extension: ${extension}`);

}

solve('C:\\Projects\\Data-Structures\\LinkedList.da.dad.a.cs');