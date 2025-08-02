import whisper
model = whisper.load_model("medium")  # or tiny/base/large
audio = whisper.load_audio("your_audio.mp3")
audio = whisper.pad_or_trim(audio)
mel = whisper.log_mel_spectrogram(audio).to(model.device)
result = model.transcribe(audio, language="auto")
print(result["text"])
