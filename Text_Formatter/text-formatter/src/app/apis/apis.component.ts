import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class ApisComponent {
  resourceId: number | null = null;    // rename from userId
  requestBody: string = '';
  responseData: any = null;
  errorMessage: string = '';
  loading = false;
  currentEndpoint = '';

  constructor(private apiService: ApiService) {}

  private validateId(): boolean {
    if (this.resourceId === null || this.resourceId === undefined || this.resourceId <= 0) {
      this.errorMessage = '❌ ID is required and must be a positive number.';
      return false;
    }
    this.errorMessage = '';
    return true;
  }

  private handleApiCall(observable: Observable<any>, endpoint: string) {
    if (!this.validateId()) return;
    this.loading = true;
    this.currentEndpoint = endpoint;
    this.responseData = null;
    this.errorMessage = '';

    observable.subscribe({
      next: (data: any) => {
        this.responseData = data;
        this.errorMessage = '';
        this.loading = false;
      },
      error: (err: any) => {
        this.errorMessage = err.message;
        this.responseData = null;
        this.loading = false;
      }
    });
  }

  fetchComment() {
    this.handleApiCall(this.apiService.getComment(this.resourceId!), 'comment');
  }

  fetchAlbum() {
    this.handleApiCall(this.apiService.getAlbum(this.resourceId!), 'album');
  }

  fetchPhoto() {
    this.handleApiCall(this.apiService.getPhoto(this.resourceId!), 'photo');
  }

  fetchTodo() {
    this.handleApiCall(this.apiService.getTodo(this.resourceId!), 'todo');
  }

  deletePost() {
    if (!this.validateId()) return;
    if (!confirm('Are you sure you want to delete this post?')) return;
    this.loading = true;
    this.apiService.deletePost(this.resourceId!).subscribe({
      next: () => {
        this.responseData = { message: `✅ Post ${this.resourceId} deleted successfully.` };
        this.errorMessage = '';
        this.loading = false;
        this.currentEndpoint = 'delete';
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.responseData = null;
        this.loading = false;
      }
    });
  }

  updatePost() {
    if (!this.validateId()) return;
    if (!this.requestBody.trim()) {
      this.errorMessage = '❌ Request body cannot be empty for update.';
      return;
    }
    const body = { id: this.resourceId, body: this.requestBody };
    this.loading = true;
    this.apiService.updatePost(this.resourceId!, body).subscribe({
      next: (data) => {
        this.responseData = data;
        this.errorMessage = '';
        this.loading = false;
        this.currentEndpoint = 'update';
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.responseData = null;
        this.loading = false;
      }
    });
  }

  createPost() {
    if (!this.validateId()) return;
    if (!this.requestBody.trim()) {
      this.errorMessage = '❌ Request body cannot be empty for create.';
      return;
    }
    const body = { userId: 1, title: 'New Post', body: this.requestBody }; // userId hardcoded for demo
    this.loading = true;
    this.apiService.createPost(body).subscribe({
      next: (data) => {
        this.responseData = data;
        this.errorMessage = '';
        this.loading = false;
        this.currentEndpoint = 'create';
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.responseData = null;
        this.loading = false;
      }
    });
  }

  // Helper to check if response is a single object (for proper display)
  isCommentResponse(): boolean {
    return this.currentEndpoint === 'comment' && this.responseData && !Array.isArray(this.responseData);
  }

  isAlbumResponse(): boolean {
    return this.currentEndpoint === 'album' && this.responseData && !Array.isArray(this.responseData);
  }

  isPhotoResponse(): boolean {
    return this.currentEndpoint === 'photo' && this.responseData && !Array.isArray(this.responseData);
  }

  isTodoResponse(): boolean {
    return this.currentEndpoint === 'todo' && this.responseData && !Array.isArray(this.responseData);
  }

  isSimpleMessage(): boolean {
    return ['delete', 'update', 'create'].includes(this.currentEndpoint) &&
           this.responseData && typeof this.responseData === 'object';
  }
}