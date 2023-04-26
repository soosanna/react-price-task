//import Card from './Card';
import './App.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  let myPrices = [
    {
      plan: "FREE",
      price: "$0/month",
      features: [
        {
          name: "Single User",
          isEnabled: true
        },
        {
          name: "50GB Storage",
          isEnabled: true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        {
          name: "Community Access",
          isEnabled: true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: false
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: false
        },
        {
          name: "Free Subdomain",
          isEnabled: false
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false
        }
      ]
    },
    {
      plan: "PLUS",
      price: "$9/month",
      features: [
        {
          name: "5 Users",
          isEnabled: true
        },
        {
          name: "50GB Storage",
          isEnabled: true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        {
          name: "Community Access",
          isEnabled: true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true
        },
        {
          name: "Free Subdomain",
          isEnabled: true
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false
        }
      ]
    },
    {
      plan: "PRO",
      price: "$49/month",
      features: [
        {
          name: "Unlimited Users",
          isEnabled: true
        },
        {
          name: "50GB Storage",
          isEnabled: true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        {
          name: "Community Access",
          isEnabled: true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true
        },
        {
          name: "Free Subdomain",
          isEnabled: true
        },
        {
          name: "Monthly Status Reports",
          isEnabled: true
        }
      ]
    }
  ]
  return (


    <section className="pricing py-7">
      <div className="container">
        <div className="row">
          {
            myPrices.map((obj,idx) => {
              return <Card 
              key={idx}
              data={obj} />
            })
          }
        </div>
      </div>
    </section>


  )
}

export default App;

function Card(props) {
  return <>
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>             {/* plan is title of card */}
          <h6 class="card-price text-center">{props.data.price}</h6>               {/*this line  is price of card */}
          <hr />
          <ul className="fa-ul">
            {
              props.data.features.map((feature) => {
                return <li className={feature.isEnabled ? "" : "text-muted"}>               {/* this line is to disable the text (text-muted) */}
                  <span className="fa-li">
                    <i class={`fa ${feature.isEnabled ? 'fa-check' : 'fa-times'}`}></i>        {/* this line to font awesome icon ✔ and ✖ icon */}
                  </span>{feature.name}             {/* this line is to other content in card  */}

                </li>
              })
            }
          </ul>

          <button href="#" className="btn btn-block btn-primary text-uppercase">Button</button>
        </div>
      </div>
    </div>
  </>
}