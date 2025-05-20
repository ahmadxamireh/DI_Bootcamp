# Daily challenge GOLD: DNA
#
# Instructions:
# This challenge is about Biology that will put emphasis on your knowledge of classes, inheritance and polymorphism.
import random


# 1. Build a DNA object. DNA is composed of chromosomes that are itself composed of Genes.
# - A Gene is a single value 0 or 1; it can mutate (flip).
# - A Chromosome is a series of 10 Genes. It also can mutate, meaning a random number of genes can randomly flip
# (1/2 chance to flip).
# - A DNA is a series of 10 chromosomes, and it can also mutate the same way Chromosomes can mutate.

# 2. Implement these classes as you see fit.


# The __repr__ method in Python is a special method used to define the “official” string representation of an object.
# It’s called when you:
# • Use print() on an object (if __str__ is not defined).
# •	View the object in an interactive Python shell.
# •	Use repr(object).

class Gene:
    def __init__(self, value=None):
        """Initialize a gene with a random value (0 or 1) or a specified value"""
        self.value = value if value in [0, 1] else random.randint(0, 1)


    def mutate(self):
        """Flip the gene's value from 0 to 1 or 1 to 0"""
        self.value = 1 - self.value


    def __repr__(self):
        """Return string representation of gene value"""
        return str(self.value)


class Chromosome:
    def __init__(self):
        """Initialize a chromosome with 10 random genes"""
        self.genes = [Gene() for _ in range(10)]


    def mutate(self, mutation_chance=0.5):
        """Mutate genes with given probability"""
        for gene in self.genes:
            if random.random() < mutation_chance:  # 50% chance to mutate each gene
                gene.mutate()


    def is_perfect(self):
        """Check if all genes have value of 1"""
        return all(gene.value == 1 for gene in self.genes)


    def __repr__(self):
        """Return string representation of chromosome's genes"""
        return ''.join(str(gene) for gene in self.genes)


class DNA:
    def __init__(self):
        """Initialize a DNA with 10 random chromosomes"""
        self.chromosomes = [Chromosome() for _ in range(10)]


    def mutate(self, mutation_chance=0.5):
        """Mutate chromosomes with a given probability"""
        for chromosome in self.chromosomes:
            if random.random() < mutation_chance:
                chromosome.mutate()


    def is_perfect(self):
        """Check if all chromosomes are perfect (all genes are 1)"""
        return all(chromosome.is_perfect() for chromosome in self.chromosomes)


    def __repr__(self):
        """Return string representation of DNA's chromosomes"""
        return '\n'.join(str(chromosome) for chromosome in self.chromosomes)


class Organism:
    def __init__(self, dna: DNA, environment):
        """Initialize an organism with DNA and mutation probability"""
        self.dna = dna
        self.environment = environment
        self.generations = 0


    def mutate(self):
        """Mutate an organism's DNA until perfect DNA is achieved"""
        while not self.dna.is_perfect():
            self.dna.mutate(self.environment)
            self.generations += 1
        return self.generations


dna = DNA()
print("Original DNA:")
print(dna)


def main():
    """Main function to simulate DNA evolution"""
    print("Simulating evolution:")

    organism = Organism(dna, environment=0.5)
    generations = organism.mutate()
    print(f"Organism reached perfect DNA in {format(generations, ',')} generations.")

    print("\nPerfect DNA achieved:")
    print(organism.dna)


main()
