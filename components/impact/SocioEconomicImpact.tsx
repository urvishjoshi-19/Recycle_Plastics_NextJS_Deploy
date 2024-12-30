import { Briefcase, TrendingUp, Users } from 'lucide-react'

const SocioEconomicImpact = () => {
  return (
    <section className="py-12 bg-muted rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Driving Global Socio-Economic Change</h2>
      <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
        Our initiatives create jobs, support local economies, and transform lives, making a significant socio-economic impact worldwide.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center">
          <Briefcase className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Job Creation</h3>
          <p className="text-center">Over 10,000 jobs created globally</p>
        </div>
        <div className="flex flex-col items-center">
          <TrendingUp className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Economic Growth</h3>
          <p className="text-center">Supporting economies in 20+ countries</p>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community Development</h3>
          <p className="text-center">Transforming lives across continents</p>
        </div>
      </div>
    </section>
  )
}

export default SocioEconomicImpact

