import FAQScreen from "../src/screens/FAQScreen";

export default FAQScreen;

export async function getStaticProps() {

    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json?_sm_au_=iVV01qqNP5MfvSwFL321jK0f1JH33';
    const faq = await fetch(FAQ_API_URL)
        .then(apiResponse => {
            return apiResponse.json();
        })
        .then(response => {
            return response;
        })

    return {
        props: {
            faq
        }
    }
}

