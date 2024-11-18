import product1 from "../Data/images/product1.jpg"
const SinglePage = () => {

    return (
        <>
            <div className="flex items-center">
                <div>
                    <img src={product1} alt="perfume" />
                </div>
                <div>
                    <h4> Perfume </h4>

                    <h2>Gabrielle Essence Eau De Parfum</h2>

                    <p>A floral, solar and voluptuous interpretation composed by Olivier Polge,
                        Perfumer-Creator for the House of CHANEL.</p>
                        
                    <div className="flex items-center">
                        <div> $149.99</div>
                        <div>$169.99</div>
                    </div>

                    <button>
                        Add to Cart
                    </button>


                </div>
            </div>
        </>
    );
}

export default SinglePage;