export class Person {
    private fistName: string;
    private lastName: string;
    private pesel: string;

    constructor(fistName: string, lastName: string, pesel: string) {
        this.fistName = fistName
        this.lastName = lastName
        this.pesel = pesel
    }


    /**
     * Getter lastName
     * @return {string}
     */
	public getLastName(): string {
		return this.lastName;
	}

    /**
     * Setter lastName
     * @param {string} value
     */
	public setLastName(value: string) {
		this.lastName = value;
	}


    /**
     * Getter fistName
     * @return {string}
     */
	public getFistName(): string {
		return this.fistName;
	}

    /**
     * Setter fistName
     * @param {string} value
     */
	public setFistName(value: string) {
		this.fistName = value;
	}

    /**
     * Getter pesel
     * @return {string}
     */
	public getPesel(): string {
		return this.pesel;
	}

    /**
     * Setter pesel
     * @param {string} value
     */
	public setPesel(value: string) {
		this.pesel = value;
	}
   

    // method show name and surname of user

    show(): void {
        console.log("Hi my name is: "  +  this.getFistName() + " " + this.getLastName());
    }
}