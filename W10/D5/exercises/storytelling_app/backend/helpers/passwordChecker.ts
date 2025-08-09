// utility function to validate password strength
export default function isStrongPassword(password: string): boolean {
    const minLength = 8;

    // regex patterns for validating the password
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    // test the password against the patterns
    return (
        password.length >= minLength &&
        hasUpper &&
        hasLower &&
        hasNumber &&
        hasSymbol
    );
}