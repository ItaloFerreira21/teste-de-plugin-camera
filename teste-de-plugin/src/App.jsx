import React, { useRef, useState } from "react";

const CameraComponent = () => {
  const videoRef = useRef(null); // Referência para o elemento de vídeo
  const canvasRef = useRef(null); // Referência para o elemento de canvas
  const [photoCaptured, setPhotoCaptured] = useState(false); // Estado para controlar se uma foto foi capturada
  const [error, setError] = useState(null); // Estado para capturar erros

  // Função para iniciar a câmera e capturar a foto
  const capturePhoto = async () => {
    try {
      // Solicita permissão para acessar a câmera
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        // Aguarda o vídeo carregar
        await new Promise((resolve) => {
          videoRef.current.onloadedmetadata = resolve;
        });

        // Define o tamanho do canvas com base no vídeo
        const context = canvasRef.current.getContext("2d");
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;

        // Desenha o frame atual do vídeo no canvas
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );

        // Para a câmera após capturar a foto
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());

        // Indica que a foto foi capturada
        setPhotoCaptured(true);
      }
    } catch (err) {
      console.error("Erro ao acessar a câmera:", err);
      setError("Não foi possível acessar a câmera. Verifique as permissões.");
    }
  };

  return (
    <div className="camera-component">
      <h2>Simular Foto</h2>

      {error ? ( // Exibe erro, se houver
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          {/* Botão para capturar foto */}
          {!photoCaptured && (
            <button
              onClick={capturePhoto}
              style={{ margin: "10px 0", padding: "10px 20px" }}
            >
              Tirar Foto
            </button>
          )}

          {/* Canvas para mostrar a foto capturada */}
          {photoCaptured && (
            <>
              <p>Foto capturada com sucesso!</p>
              <canvas
                ref={canvasRef}
                style={{
                  border: "1px solid black",
                  display: "block",
                  marginTop: "10px",
                }}
              ></canvas>
            </>
          )}

          {/* Vídeo oculto usado apenas para capturar a foto */}
          <video
            ref={videoRef}
            style={{ display: "none" }}
            autoPlay
            playsInline
          ></video>
        </>
      )}
    </div>
  );
};

export default CameraComponent;


/* import { useState } from 'react'
import './App.css'
import React from 'react';
import CameraComponent from './camera/cmra.jsx';

const App = () => {
  return (
    <div>
      <h1>Bem-vindo à nossa Aplicação</h1>
      <CameraComponent />
    </div>
  );
};

export default App; */
