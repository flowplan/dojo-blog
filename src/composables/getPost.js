import { ref } from 'vue'

const getPost = (id) =>{

    const post = ref(null)
    const error = ref(null)

    //use for fetching json data in data folder above all files and out to the webpage
        const load = async () => {
            try{
                let data = await fetch('http://localhost:3000/posts/' + id)
                // console.log(data)
                if(!data.ok){
                    throw Error("that post not exist.")
                }
                post.value = await data.json()
            }
            catch(err){
                error.value = err.message
                console.log(error.value)
            }
        }
    
        return{ post, error, load}
}

export default getPost