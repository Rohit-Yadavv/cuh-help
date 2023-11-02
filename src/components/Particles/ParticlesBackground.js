'use client'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "./ParticleConfig"
const ParticlesBackground = () => {
    async function loadParticles(main) {
        await loadFull(main)
    }
    return (
        <Particles id="tsparticles" init={loadParticles}
            options={ParticleConfig}></Particles>
    )
}

export default ParticlesBackground