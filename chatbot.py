from googletrans import Translator
import sys

def perform_translation(text):  
    translator = Translator()
    translated = translator.translate(text, dest='id')  
    translated_text = "Terjemahan: " + translated.text
    return translated_text

text_from_node_server = str(sys.argv[1])

translate_text = perform_translation(text_from_node_server)

print(translate_text)
sys.stdout.flush()
