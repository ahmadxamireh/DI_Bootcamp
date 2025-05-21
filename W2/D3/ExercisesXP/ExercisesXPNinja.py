# Exercise 1: Temperature
# Instructions
# Write a base class called Temperature.
# Implement the following subclasses: Celsius, Kelvin, Fahrenheit.
# Each of the subclasses should have a method which can convert the temperture to another type.
# You must consider different designs and pick the best one according to the SOLID Principle.
import random


class Temperature:
    """
    Represents a base class for temperature conversion systems, providing an interface for creating and converting
    temperature objects to and from various temperature scales.

    This abstract base class is designed to be extended by specific temperature types such as Celsius, Fahrenheit,
    and Kelvin. It enforces the implementation of scale-specific conversion methods, ensuring consistency in how
    temperature values are transformed between scales. Instances of derived classes should override the abstract
    methods provided.

    :ivar temperature: The numeric temperature value associated with the instance.
    :type temperature: float
    """


    def __init__(self, temperature: float):
        """Initialize temperature value"""
        self.temperature = temperature


    # This method is meant to be overridden by any subclass. If it’s not, throw an error.
    # Every specific temperature type (like Celsius, Kelvin, Fahrenheit) must provide its own to_celsius() method.
    # If someone forgets to implement it in a subclass and tries to use it, the program will immediately fail with a
    # clear message, rather than silently doing something incorrect.
    # It ensures every temperature unit subclass converts itself to Celsius.

    def to_celsius(self):
        """Convert current temperature to Celsius"""
        # A safety check that forces subclasses to implement required methods
        raise NotImplementedError("Must be implemented by subclass.")


    # This method is meant to be overridden by any subclass. If it’s not, throw an error.
    # Every specific temperature type (like Celsius, Kelvin, Fahrenheit) must provide its own from_celsius() method.
    # If someone forgets to implement it in a subclass and tries to use it, the program will immediately fail with a
    # clear message, rather than silently doing something incorrect.
    # This method creates a new object (an instance) of a specific temperature class from a Celsius value.
    # cls refers to the class that called this method
    @classmethod
    def from_celsius(cls, celsius_temp: float):
        """Create instance from Celsius value"""
        # A safety check that forces subclasses to implement required methods
        raise NotImplementedError("Must be implemented by subclass.")


    def convert(self, target_temperature: str):
        """Convert temperature to specified scale"""
        to = target_temperature.lower()  # target temperature namae in lower case to avoid case sensitivity

        # convert the object's temperature to Celsius
        # * use Celsius temperature as the base for all conversions *
        # if we are converting from Kelvin to Fahrenheit:
        # 1. convert Kelvin to Celsius using self.to_celsius()
        # 2. convert the celsius_temperature that we got to Fahrenheit
        celsius_temperature = self.to_celsius()
        if to == 'celsius':
            return Celsius(celsius_temperature)
        elif to == 'fahrenheit':
            return Fahrenheit.from_celsius(celsius_temperature)
        elif to == 'kelvin':
            return Kelvin.from_celsius(celsius_temperature)
        else:
            raise ValueError(f"Unsupported conversion target: {to}")


class Celsius(Temperature):
    def __init__(self, temperature: float):
        """Initialize Celsius temperature"""
        super().__init__(temperature)


    def to_celsius(self):
        """Return temperature value since already in Celsius"""
        return self.temperature


    @classmethod
    def from_celsius(cls, celsius_temp: float):
        """Create Celsius instance from Celsius value"""
        return cls(celsius_temp)


class Kelvin(Temperature):
    def __init__(self, temperature: float):
        """Initialize Kelvin temperature"""
        super().__init__(temperature)


    def to_celsius(self):
        """Convert Kelvin to Celsius"""
        return self.temperature - 273.15


    @classmethod
    def from_celsius(cls, celsius_temp: float):
        """Create Kelvin instance from Celsius value"""
        return cls(celsius_temp + 273.15)


class Fahrenheit(Temperature):
    def __init__(self, temperature: float):
        """Initialize Fahrenheit temperature"""
        super().__init__(temperature)


    def to_celsius(self):
        """Convert Fahrenheit to Celsius"""
        return (self.temperature - 32) * (5 / 9)


    @classmethod
    def from_celsius(cls, celsius_temp: float):
        """Create Fahrenheit instance from Celsius value"""
        return cls(celsius_temp * (9 / 5) + 32)


# Test temperature conversions
c = Celsius(30)
print(round(c.convert('kelvin').temperature, 2))  # Convert Celsius to Kelvin
print(round(c.convert('fahrenheit').temperature, 2))  # Convert Celsius to Fahrenheit

k = Kelvin(30)
print(round(k.convert('celsius').temperature, 2))  # Convert Kelvin to Celsius
print(round(k.convert('fahrenheit').temperature, 2))  # Convert Kelvin to Fahrenheit

f = Fahrenheit(30)
print(round(f.convert('kelvin').temperature, 2))  # Convert Fahrenheit to Kelvin
print(round(f.convert('celsius').temperature, 2))  # Convert Fahrenheit to Celsius


# ----------------------------------------------------------------------------------------------------
# Exercise 2: In the Quantum Realm
# Instructions
# 1. Write a class called QuantumParticle and implement the following:
# - The attributes - The particle has an initial position (x), momentum (y) and spin (p)

class QuantumParticle:
    """
    Representation of a quantum particle with properties such as position, momentum, and spin.

    The class encapsulates the behavior of a quantum particle, supporting measurements of position,
    momentum, spin, and introducing quantum behaviors such as entanglement and disturbance.
    Measurements affect the quantum state of the particle due to disturbance. The class also supports
    a quantum entanglement mechanism where two particles can be entangled, ensuring correlated spin
    measurements.

    :ivar position: Position of the particle, randomly initialized if not provided.
    :type position: int
    :ivar momentum: Momentum of the particle, randomly initialized if not provided.
    :type momentum: float
    :ivar spin: Spin of the particle (either 0.5 or -0.5), randomly initialized if not provided.
    :type spin: float
    :ivar entangled_particle: Reference to another particle if the particle is entangled.
    :type entangled_particle: Optional[QuantumParticle]
    :ivar spin_manual_init: Boolean indicating whether the spin was manually initialized.
    :type spin_manual_init: bool
    """


    def __init__(self, x=None, y=None, p=None):
        # position: If not given, generate a random integer between 1 and 10,000
        self.position = x if x is not None else random.randint(1, 10000)
        # momentum: If not given, generate a random float between 0 and 1
        self.momentum = y if y is not None else random.uniform(0, 1)
        # spin: If not given, assign randomly to either 0.5 or -0.5
        self.spin = p if p is not None else random.choice([0.5, -0.5])
        # placeholder for entanglement reference
        self.entangled_particle = None
        # store whether the spin was initialized or manually given
        self.spin_manual_init = True if p is not None else False


    # - The method position() - Position measurement: generate a random position (integer between 1 and 10,000)
    def measure_position(self):
        self.disturbance()
        return self.position


    # - The method momentum() - Momentum measurement: generate a random momentum (float - a number between 0 and 1)
    def measure_momentum(self):
        self.disturbance()
        return self.momentum


    # - The method spin() - Spin measurement: can randomly be 1/2 or -1/2
    def measure_spin(self):
        # If entangled, set the other particle's spin to the opposite
        if self.entangled_particle is not None:
            self.entangled_particle.spin = - self.spin
        return self.spin


    # - Create a method that implements a disturbance. A disturbance occurs each time a measurement is made (e.g. one of
    # the measurements methods is called). Disturbance changes the position and the momentum of the particle (randomly
    # generated) and then prints ‘Quantum Interferences!!’
    def disturbance(self):
        self.position = random.randint(1, 10_000)
        self.momentum = random.uniform(0, 1)
        print('Quantum Interferences!!')


    # - Implement a meaningful representation of the particle (repr)
    def __repr__(self):
        return f'QuantumParticle(position = {self.position}, momentum = {self.momentum}, spin = {self.spin})'


    # 2. Quantum Entanglement: two particle can be entangled, meaning that if I measure the spin of one of them the
    # second one is automatically set to the opposite value. A quantum particle can only be entangled to another quantum
    # particle (check that when you run the method !!)
    # - Modify as you see fit the attributes and methods of your class to fit the previous definition
    # - When two particles are entangled print: ‘Spooky Action at a Distance !!’
    def entangle(self, other):
        if isinstance(other, QuantumParticle):
            self.entangled_particle = other
            other.entangled_particle = self
            if self.spin_manual_init and other.spin_manual_init:
                print('Particle p1 is now in quantum entanglement with Particle p2')
            else:
                print(f'Spooky Action at a Distance')
        else:
            raise TypeError('Failed! Expected 2 QuantumParticles for entanglement.')

# Create a particle with specified position and spin
particle = QuantumParticle(x=1, p=5.0)
print(particle)  # Print particle attributes

# Create two particles with specified attributes for entanglement
p1 = QuantumParticle(x=1, p=5.0)
p2 = QuantumParticle(x=2, p=5.0)
print(p1)
print(p2)
p1.entangle(p2)  # Entangle p1 and p2

# Measure spin of p1 which affects p2's spin through entanglement
print("P1 spin:", p1.measure_spin())
print("P2 spin:", p2.spin)  # Should be the opposite due to entanglement

# Create two particles with random attributes
p3 = QuantumParticle()  # Position, momentum and spin will be random
p4 = QuantumParticle()  # Position, momentum and spin will be random
p3.entangle(p4)  # Entangle p3 and p4
print(p3)
print(p4)
