import sys

text_from_node_server = str(sys.argv[1])

translate_text = perform_translation(text_from_node_server)


print(translate_text)
sys.stdout.flush