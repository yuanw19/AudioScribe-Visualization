# AudioScribe
This is a chrome extension for the data visualzation tool "projector TensorFlow". It creates extra functionalities of the projector TensorFlow.

MUST HAVE CHROME INSTALLED

MUST HAVE AUDIOSCRIBE EXTENSION ADDED IN CHROME

MUST HAVE PYTHON INTSALLED

################################################################

### HOW TO ADD CHROME EXTENSION

1. Open Chrome

2. Go to "chrome://extensions/"

3. Enable the Developer Mode (top right corner of the page)

4. Click "Load unpacked"

5. Choose "AudioScribe-Visualization" folder

6. The page will then display the AudioScribe extension (image below)

![image](/AudioScribe-Visualization/Image/Readme_extension.png)

################################################################

### HOW TO USE IT

1. Unzip "static.7z". The file can be found here: https://drive.google.com/file/d/1riZSiq_SROP3dATAwXxWIWFgyv0s-isl/view?usp=sharing. Place all the unzipped "png" 
   and "wav" files under the "AudioScribe-Visualization/static" folder

2. Download "Anton.tsv" from https://drive.google.com/file/d/1otfzLdr8Q28qcY4p5PDxNC4B4IHTftM1/view?usp=sharing, place it under the "AudioScribe-
   Visualization/tsvfile" folder

3. Run application.py on your computer. This is setting up a local server on your PC. You will be able to see a generated link.

4. Open Chrome

5. Go to "https://projector.tensorflow.org/"

6. On the top left region of the website, click "Load"

7. Under "Step 1", click on "Choose file" to load "Anton.tsv" file on the tensorflow projector. You can find the file under the 
   "tsvfile" folder
   
8. Under "Step 2", click on "Choose file" to load "metadataAnton.tsv" file on the tensorflow projector. You can find the file under the 
   "tsvfile" folder (this is optional)

9. Once finished, exit the uploading interface. By clicking on each generated data, you are able to 
   view the detailed information about it

10. you may click on each data points to show the image and audio for half second sliced recording

11. then you can click the T-sne button,the datapoints will be processing through a T-sne process and shows the similarity between each 
    datapoints

![image](/AudioScribe-Visualization//Image/Readme_tensor.png)

The website will display the vector for the uploaded data. By clicking on each data vector, the corresponding audio wav files will pop up in another site.

More information about projector TensorFlow can be found at "https://www.tensorflow.org/tensorboard/tensorboard_projector_plugin"
