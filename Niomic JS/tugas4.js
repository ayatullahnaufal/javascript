var ilham = 154;
var rizki = 176;
var reza = 180;

function cektb(tinggi){
	if (tinggi >= 180) {
		console.log("Memiliki tinggi badan paling tinggi")
	}else if(tinggi <= 160){
		console.log("memiliki tinggi badan terendah")
	}else{
		console.log("memiliki tinggi badan normal")
	}
}

console.log("Reza", reza,"cm"), cektb(reza);
console.log("Rizki", rizki,"cm"), cektb(rizki);
console.log("Ilham", ilham,"cm"), cektb(ilham);

