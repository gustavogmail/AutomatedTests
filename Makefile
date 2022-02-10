build-image:
	@echo "Building the Docker image..."
	docker build -t gustavosaudade/automation:1.0 .

container-run:
	@echo "Running the Docker container..."
	docker run gustavosaudade/automation:1.0