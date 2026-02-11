import { useEffect, useRef } from 'react';
import { Volume2 } from 'lucide-react';

interface BirdSoundPlayerProps {
  enabled: boolean;
}

export function BirdSoundPlayer({ enabled }: BirdSoundPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for ambient bird sounds
    // In a real implementation, you would have an actual audio file
    // For now, we'll create a placeholder that manages the state
    
    if (enabled) {
      // Simulate playing bird sounds
      console.log('🐦 Bird sounds enabled');
    } else {
      // Simulate stopping bird sounds
      console.log('🔇 Bird sounds disabled');
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [enabled]);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {enabled && (
        <div className="bg-[rgb(var(--color-earth-green))]/90 backdrop-blur-sm text-[rgb(var(--color-ivory))] px-4 py-3 rounded-full shadow-lg flex items-center space-x-2">
          <Volume2 className="w-4 h-4 animate-pulse" />
          <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Nature Sounds Playing</span>
        </div>
      )}
    </div>
  );
}
