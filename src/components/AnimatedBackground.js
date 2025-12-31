import Particles from './Particles';
import '../styles/AnimatedBackground.css';

function AnimatedBackground() {
    return (
        <div className="animated-bg">
            <Particles
                particleColors={['#2978b5', '#1e5d8f', '#3b9dd9', '#5ba3d0']}
                particleCount={500}
                particleSpread={12}
                speed={0.09}
                particleBaseSize={100}
                sizeRandomness={2}
                moveParticlesOnHover={true}
                particleHoverFactor={0.3}
                alphaParticles={true}
                disableRotation={false}
                cameraDistance={22}
                pixelRatio={window.devicePixelRatio || 1}
            />

            {/* Overlay for better text readability */}
            <div className="bg-overlay"></div>
        </div>
    );
}

export default AnimatedBackground;
