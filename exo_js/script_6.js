


let createAminoAcid = (codon) => {
    let aminoAcid;
    if (codon === "UCU" || codon === "UCC" ||
    codon === "UCA" || codon === "UCG" ||
    codon === "AGU" || codon === "AGC") {
      aminoAcid = "Sérine";
    } else if (codon === "CCU" || codon === "CCC" ||
    codon === "CCA" || codon === "CCG") {
      aminoAcid = "Proline";
    } else if (codon === "UUA" || codon === "UUG") {
      aminoAcid = "Leucine";
    } else if (codon === "UUU" || codon === "UUC") {
      aminoAcid = "Phénylalanine";
    } else if ( codon === "CGU" || codon === "CGC" ||
    codon === "CGA" || codon === "CGG" ||
    codon === "AGA" || codon === "AGG") {
      aminoAcid = "Arginine";
    } else if (codon === "UAU" || codon === "UAC") {
      aminoAcid = "Tyrosine";
    } else {
      return "(Pas d'acide aminé pour ce codon)";
    };
    return aminoAcid;
  };

  let createProtein = (arn) => {
    let arrayOfNucleotides = arn.split("");
    let arrayOfGroups = [];
    for (x = 0; x <= arrayOfNucleotides.length - 3; x += 3) {
      arrayOfGroups.push(arrayOfNucleotides.slice(x, x + 3));
    };
    let arrayOfCodons = [];
    arrayOfGroups.forEach(group => {
      arrayOfCodons.push(group.join(""));
    });
    let arrayOfAminoAcids = [];
    arrayOfCodons.forEach(codon => {
      arrayOfAminoAcids.push((createAminoAcid(codon)));
    });
    let protein = arrayOfAminoAcids.join(" - ");
    return protein;
  };
  
  chosenArn = prompt("Saisissez un ARN à transformer en protéine : \n Exemples : \n-CCGUCGUUGCGCUACAGC \n-CCUCGCCGGUACUUCUCG")
  
  console.log(createProtein(chosenArn));