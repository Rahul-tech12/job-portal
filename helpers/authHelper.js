import bcrypt from 'bcrypt'

export const hashPassword=async(password)=>{
    try {
        let saltRounds=10
        const hashedPassword=await bcrypt.hash(password,saltRounds)
    } catch (error) {
        console.log(error)
    }
}

export const comparePassword=async(password,hashedPassword)=>{
    return await bcrypt.compare(password,hashedPassword)
    
}